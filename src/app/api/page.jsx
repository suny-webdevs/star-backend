import Link from "next/link"

const Page = () => {
  return (
    <div>
      <h3 className="text-4xl text-white font-bold">Api urls</h3>
      <div className="mt-5">
        <Link
          href={`${process.env.NEXT_PUBLIC_API_URL}/api/users`}
          className="text-lg text-white font-medium"
        >
          1. Users
        </Link>
      </div>
    </div>
  )
}

export default Page
