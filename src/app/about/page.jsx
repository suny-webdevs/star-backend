import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AboutPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="relative h-screen w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="absolute left-24 top-0 h-full w-[90%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg">
          This is a sample content section with some descriptive text.
        </p>
        <button className="mt-8 rounded-md bg-blue-600 px-6 py-2 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
