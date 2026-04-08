const users = [
  { id: 1, name: "John Doe", email: "john@mail.com", role: "User" },
  { id: 2, name: "Admin", email: "admin@mail.com", role: "Admin" },
];

const UserTable = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-[#020617] text-gray-400 text-sm uppercase">
          <tr>
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-700 hover:bg-[#334155] transition"
            >
              <td className="p-4">{user.id}</td>
              <td className="p-4 font-medium">{user.name}</td>
              <td className="p-4 text-gray-400">{user.email}</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-sm bg-indigo-500/20 text-indigo-400">
                  {user.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;