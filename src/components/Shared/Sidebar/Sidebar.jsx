import Link from "next/link";
import NavLink from "../NavLink/NavLink";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/my-profile",
    title: "My Profile",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/all-product",
    title: "All Product",
  },
  {
    path: "/",
    title: "Home",
  },
];
const Sidebar = () => {
  return (
    <aside className="">
      <h1 className="text-3xl text-[white] font-semibold">Dashboard</h1>
      <ul className="bg-[#7f7fb6] text-white m-5 p-5">
        {navLinks.map(({ path, title }) => (
          <li className="my-5" key={path}>
            <NavLink
              exact
              activeClassName="text-blue-500  underline"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
