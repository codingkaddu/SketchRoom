import { useRef, useState } from "react";
import { FaEraser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";

import { useOptions } from "@/common/recoil/options";
import { EntryAnimation } from "../../animations/Entry.animations";

const EraserButton = () => {
  const [options, setOptions] = useOptions();
  const ref = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  const handleToggleEraser = () => {
    setOptions((prev) => ({
      ...prev,
      mode: prev.mode === "eraser" ? "draw" : "eraser",
    }));
    setOpened(false);
  };

  return (
    <div className="relative flex flex-col items-center" ref={ref}>
      <button
        className="flex flex-col items-center gap-1 text-white"
        onClick={handleToggleEraser}
        title="Eraser"
      >
        <div className={`text-4xl ${options.mode === "eraser" ? "text-red-400" : "text-green-400"}`}>
          <FaEraser />
        </div>
        <span className="text-xs font-medium select-none">
          {options.mode === "eraser" ? "Erasing" : "Eraser"}
        </span>
      </button>

      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute left-16 top-14 z-10 flex flex-col gap-2 rounded-lg border border-zinc-700 bg-zinc-900 p-3 shadow-lg"
            variants={EntryAnimation}
            initial="from"
            animate="to"
            exit="from"
          >
            {/* Additional eraser options could go here if needed */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EraserButton;
