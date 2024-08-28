"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Users",
//   description: "All users details of star-backend",
// }

const UserPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
    );
    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold">Users</h1>
      <div className="mt-10 flex flex-col gap-2">
        {users.map((user) => (
          <Link href={user.username} key={user.id}>
            {user.firstName} {user.lastName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
