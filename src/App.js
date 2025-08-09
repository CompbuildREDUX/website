import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

export default function App() {
  const [dark, setDark] = React.useState(false);
  const toggle = () => setDark(!dark);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100">
        <header className="px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-neutral-950/70 sticky top-0">
          <a href="#top" className="font-medium tracking-tight">Compbuild</a>
          <div className="flex items-center gap-3">
            <button onClick={toggle} className="border px-3 py-1 rounded flex items-center gap-2">
              {dark ? <Sun size={16}/> : <Moon size={16}/>}
              <span>{dark ? "Light" : "Dark"} mode</span>
            </button>
          </div>
        </header>

        <section className="px-6 py-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold">
              Designing realistic cities and landscapes in Minecraft since 2017.
            </motion.h1>
            <p className="mt-4">We go out of our way to break the limits of Minecraft and turn it into more than just a game.</p>
          </div>
        </section>
      </div>
    </div>
  );
}