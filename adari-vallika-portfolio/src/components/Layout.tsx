import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-zinc-400 font-sans selection:bg-violet-500 selection:text-black">
      <Navbar />
      <main className="pt-24 pb-12 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "circOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <footer className="border-t border-neutral-900 py-12 mt-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-sm italic">
          <p>© 2026 Adari Vallika Portfolio</p>
          <div className="flex gap-6">
            <a href="https://github.com/vallikavishnupriya" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/vallika-adari" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
