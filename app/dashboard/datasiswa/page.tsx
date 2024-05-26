// app/dashboard/datasiswa/page.tsx

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", nama_siswa: "", kelasID: "" });
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchClasses();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get("/api/siswa");
    setStudents(response.data);
  };

  const fetchClasses = async () => {
    const response = await axios.get("/api/kelas"); // assuming you have a similar API endpoint for classes
    setClasses(response.data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put("/api/siswa", {
          ...form,
          kelasID: parseInt(form.kelasID, 10),
        });
      } else {
        await axios.post("/api/siswa", {
          ...form,
          kelasID: parseInt(form.kelasID, 10),
        });
      }
      setForm({ id: "", nama_siswa: "", kelasID: "" });
      fetchStudents();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (student: any) => {
    setForm({
      id: student.id.toString(),
      nama_siswa: student.nama_siswa,
      kelasID: student.kelasID.toString(),
    });
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete("/api/siswa", { data: { id } });
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <h1>Ini adalah halaman untuk CRUD data siswa</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="id"
            value={form.id}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nama_siswa"
            placeholder="Nama Siswa"
            value={form.nama_siswa}
            onChange={handleChange}
            required
          />
          <select
            name="kelasID"
            value={form.kelasID}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Pilih Kelas
            </option>
            {classes.map((kelas: any) => (
              <option key={kelas.id} value={kelas.id}>
                {kelas.nama_kelas}
              </option>
            ))}
          </select>
          <button type="submit">{form.id ? "Update" : "Create"}</button>
        </form>
          <div>
            <button className="bg-[#e0ffe5] hover:bg-[#6ef97c] hover:text-[#ffffff] text-black rounded-3xl w-full py-4 px-10 hover:font-bold">
              <Link href="/dashboard/datasiswa/tambahsiswa" className="flex flex-row gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
                Tambah Data Siswa
              </Link>
            </button>
          </div>
      </div>
      <table className="w-full table-auto border-collapse mt-5">
        <thead>
          <tr>
            <th>Nama Siswa</th>
            <th>Kelas</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: any) => (
            <tr key={student.id}>
              <td>{student.nama_siswa}</td>
              <td>{student.kelas?.nama_kelas}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
