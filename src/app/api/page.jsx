import Link from "next/link";

const ApiPage = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold text-white">Api urls</h3>
      <div className="mt-5">
        <Link
          href={`${process.env.NEXT_PUBLIC_API_URL}/api/users`}
          className="text-lg font-medium text-white"
          target="_blank"
        >
          1. Users
        </Link>
      </div>
    </div>
  );
};

export default ApiPage;
