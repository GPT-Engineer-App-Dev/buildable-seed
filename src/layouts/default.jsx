import { Outlet } from "react-router-dom";
import { navItems } from "../App";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Bare-Bones App</h1>
          <nav className="space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-white hover:text-gray-400",
                    isActive && "underline"
                  )
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2023 My Bare-Bones App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;