"use client";
import Link from "next/link";
import classNames from "classnames";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const current = usePathname();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  return (
    <nav className='flex space-x-5 px-5 h-10 items-center'>
      <Link href='/'>
        <AiFillBug />
      </Link>
      <ul className='flex space-x-5'>
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={classNames({
                "text-gray-500": true,
                "hover:text-gray-900": current !== link.href,
                "text-red-600": current === link.href,
              })}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
