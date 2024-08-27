import axios from "axios"
import Link from "next/link"

export const metadata = {
  title: "Users",
  description: "All users details of star-backend",
}

const UserPage = async () => {
  //   const { data } = await axios("http://localhost:3000/api/users")
  const users = data.users

  return (
    <div>
      <h1 className="text-5xl font-bold">Users</h1>
      <div className="mt-10 flex flex-col gap-2">
        {users.map((user) => (
          <Link
            href={user.username}
            key={user.id}
          >
            {user.firstName} {user.lastName}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default UserPage
