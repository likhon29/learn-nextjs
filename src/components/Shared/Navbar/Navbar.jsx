import Link from "next/link";
import NavLink from "../NavLink/NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];
const Navbar = () => {
  return (
    <nav className="container p-5 px-20 bg-[green] flex justify-between items-center mx-auto">
      <h1 className="lg:text-3xl text-[white] font-semibold">Learn Nextjs</h1>
      <ul className="flex justify-between items-center ">
        {navLinks.map(({ path, title }) => (
          <li className="mx-5" key={path}>
            <NavLink exact={path==='/' } activeClassName='text-blue-500  underline' href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
