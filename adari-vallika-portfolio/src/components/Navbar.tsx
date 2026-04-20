import { NavLink } from "react-router-dom";
import { User, Briefcase, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1 bg-neutral-950/20 backdrop-blur-xl border border-violet-900/30 rounded-full shadow-2xl overflow-hidden">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-8 py-2 rounded-full text-sm font-medium transition-all relative ${
                isActive
                  ? "text-white"
                  : "text-zinc-400 hover:bg-violet-900/20"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-violet-800 rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">
                  {link.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
