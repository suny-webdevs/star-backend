import Image from "next/image";

const Footer = () => {
  const footerNavs = [
    {
      href: "#",
      name: "Terms",
    },
    {
      href: "#",
      name: "License",
    },
    {
      href: "#",
      name: "Privacy",
    },
    {
      href: "#",
      name: "About us",
    },
  ];

  return (
    <footer className="bg-white pt-10">
      <div className="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
        <div className="space-y-6 sm:mx-auto sm:max-w-md sm:text-center">
          <span className="font-mono text-4xl font-bold text-black md:text-5xl">
            {"<star-backend />"}
          </span>
          <p>
            Nulla auctor metus vitae lectus iaculis, vel euismod massa
            efficitur.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="block rounded-lg bg-indigo-600 px-4 py-2 text-center font-medium text-white shadow-lg duration-150 hover:bg-indigo-500 hover:shadow-none active:bg-indigo-700"
            >
              Let&apos;s get started
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-x-2 rounded-lg border px-4 py-2 font-medium text-gray-700 duration-150 hover:text-gray-500 active:bg-gray-100 md:inline-flex"
            >
              Get access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-10 items-center justify-between border-t py-10 sm:flex">
          <p>© 2022 Float UI Inc. All rights reserved.</p>
          <ul className="mt-6 flex flex-wrap items-center gap-4 sm:mt-0 sm:text-sm">
            {footerNavs.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-800 duration-150 hover:text-gray-500"
              >
                <a key={idx} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
