"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [scroll, setScroll] = useState(false);
  const session = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "User", path: "/user" },
    { title: "Api", path: "/api" },
    { title: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full bg-white/20 backdrop-blur-md transition-all duration-300 md:bg-transparent md:text-sm md:backdrop-blur-0 ${
        scroll && "md:bg-white/20 md:backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Link
            href={"/"}
            className={`font-mono text-3xl font-bold text-white`}
          >
            {"<star-backend />"}
          </Link>
          <div className="md:hidden">
            <button
              className="text-white hover:text-indigo-600"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`mt-8 flex-1 pb-3 md:mt-0 md:block md:pb-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-end space-y-5 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white hover:text-indigo-600">
                  <Link href={item.path} className="block">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <span className="z-50 hidden h-6 w-px bg-gray-300 md:block"></span>
            <div className="items-center gap-x-6 space-y-3 md:flex md:space-y-0">
              {session.status === "authenticated" ? (
                <li>
                  <Link
                    href="#"
                    className="block rounded-lg border py-3 text-center text-white hover:text-indigo-600 md:border-none"
                  >
                    Log out
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`}
                    className="block rounded-lg bg-indigo-600 px-4 py-3 text-center font-medium text-white shadow hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none md:inline"
                  >
                    Log in
                  </Link>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
