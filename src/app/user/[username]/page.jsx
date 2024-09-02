import axios from "axios";

const getUser = async (username) => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${username}`,
  );
  return data.user;
};

export const generateMetadata = async (username) => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${username}`,
  );
  return {
    title: data?.user?.username,
    description: data?.user?.email,
  };
};

const UserDetailsPage = async ({ params }) => {
  const { name, email, username, birthdate, gender, role } = await getUser(
    params.username,
  );

  return (
    <div className="w-full rounded-md border p-5 md:w-1/2">
      <p>
        Name : {name} ({role})
      </p>
      <p>Email : {email}</p>
      <p>Username : {username}</p>
      <p>Birth date : {birthdate}</p>
      <p>Gender : {gender}</p>
    </div>
  );
};

export default UserDetailsPage;
