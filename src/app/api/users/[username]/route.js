export const GET = async (request, { params }) => {
  console.log(params);
  const user = users.find((user) => user.username === params.username);
  if (!user) return Response.json({ success: false });
  return Response.json({
    success: true,
    user,
  });
};

const users = [
  {
    id: 1,
    name: "Md Suny Shaikh",
    email: "mdsunyshaikh@gmail.com",
    username: "sunyshaikh",
    birthdate: "2000-01-15",
    gender: "Male",
    role: "admin",
  },
  {
    id: 2,
    name: "John Doe",
    email: "johndoe@example.com",
    username: "johndoe",
    birthdate: "1995-04-10",
    gender: "Male",
    role: "moderator",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "janesmith@example.com",
    username: "janesmith",
    birthdate: "1998-08-23",
    gender: "Female",
    role: "member",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    username: "alicejohnson",
    birthdate: "1985-02-14",
    gender: "Female",
    role: "user",
  },
  {
    id: 5,
    name: "Bob Brown",
    email: "bobbrown@example.com",
    username: "bobbrown",
    birthdate: "1992-12-05",
    gender: "Male",
    role: "admin",
  },
  {
    id: 6,
    name: "Charlie Davis",
    email: "charliedavis@example.com",
    username: "charliedavis",
    birthdate: "1987-07-30",
    gender: "Male",
    role: "admin",
  },
  {
    id: 7,
    name: "Diana Evans",
    email: "dianaevans@example.com",
    username: "dianaevans",
    birthdate: "1999-03-18",
    gender: "Female",
    role: "admin",
  },
  {
    id: 8,
    name: "Frank Harris",
    email: "frankharris@example.com",
    username: "frankharris",
    birthdate: "1980-10-09",
    gender: "Male",
    role: "admin",
  },
  {
    id: 9,
    name: "Grace Wilson",
    email: "gracewilson@example.com",
    username: "gracewilson",
    birthdate: "1990-06-21",
    gender: "Female",
    role: "admin",
  },
  {
    id: 10,
    name: "Henry Martinez",
    email: "henrymartinez@example.com",
    username: "henrymartinez",
    birthdate: "1984-11-11",
    gender: "Male",
    role: "admin",
  },
];
