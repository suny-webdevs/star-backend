import axios from "axios"

const UserPage = async () => {
  const { data } = await axios("http://localhost:3000/api/users")
  const users = data.users

  return (
    <div>
      <h1 className="text-5xl font-bold">Users</h1>
      <div className="mt-10">
        {users.map((user) => (
          <ul key={user.id}>
            <li className="mt-2">
              {user.firstName} {user.lastName}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default UserPage
