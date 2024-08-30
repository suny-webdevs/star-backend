"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <div className="mt-10 flex w-full flex-col gap-2 md:w-1/2">
        {users.map((user) => (
          <Link
            href={`/user/${user.username}`}
            key={user.id}
            className="rounded-md border p-5"
          >
            <h3 className="text-2xl font-bold text-white">{user.name}</h3>
            <p className="text-white">{user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
