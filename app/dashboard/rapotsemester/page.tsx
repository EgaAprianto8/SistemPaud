import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function RapotSem() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-2xl font-bold flex items-center gap-8 py-3">
        RAPOT SEMESTER :{" "}
        <span className="text-green-500">Nilai Agama dan Moral</span>
        <div className="">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pilih Kelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pilih">--Pilih--</SelectItem>
              <SelectItem value="kelas1">Kelas 1/A</SelectItem>
              <SelectItem value="kelas2">Kelas 2/B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nomor Siswa
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Siswa
            </th>
            <th scope="col" className="px-6 py-3">
              Indikator Kelulusan
            </th>
            <th scope="col" className="px-6 py-3">
              Dokumen Rapot
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td>22700600gatau</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Delvan Ramadhan
            </td>
            <td
              scope="row"
              className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Lulus/Tidak lulus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">--Pilih--</SelectItem>
                  <SelectItem value="dark">Lulus</SelectItem>
                  <SelectItem value="dark">Tidak Lulus</SelectItem>
                </SelectContent>
              </Select>
            </td>
            <td className="items-center w-auto h-auto items-center w-64 h-auto ">
              <Input
                id="filerapot"
                type="file"
                className="hover:bg-gray-200 hover:shadow-md transition duration-300"
              />
            </td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <td>22700600gatau</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Delvan Ramadhan
            </td>
            <td
              scope="row"
              className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Lulus/Tidak lulus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">--Pilih--</SelectItem>
                  <SelectItem value="dark">Lulus</SelectItem>
                  <SelectItem value="dark">Tidak Lulus</SelectItem>
                </SelectContent>
              </Select>
            </td>
            <td className="items-center w-64 h-auto">
              <Input
                id="filerapot"
                type="file"
                className="hover:bg-gray-200 hover:shadow-md transition duration-300"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RapotSem;
