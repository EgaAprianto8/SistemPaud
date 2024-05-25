import { queryData } from "@/utils/getQueryOutput";

const Home = async () => {
  const queryOutput = await queryData();
  console.log(JSON.stringify(queryOutput, null, 2))
  return (
    <div>page\\</div>
  );

}

export default Home
