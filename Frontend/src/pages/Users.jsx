import UserTable from "../components/UserTable";

const Users = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Users</h1>

      <div className="bg-[#1e293b]/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-5">
        <UserTable />
      </div>
    </div>
  );
};

export default Users;