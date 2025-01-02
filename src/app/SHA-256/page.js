import BasicTable from "../component/Table";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col gap-4 w-full px-4">
        <div>
          <h1 className="text-center text-2xl text-gray-500 uppercase">Only us knows this route exist</h1>
        </div>
        <div className="w-[90%] mx-auto overflow-x-auto">
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
