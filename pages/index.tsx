import { useRef } from "react";
import { motion } from "framer-motion";
import usePointTracker from "../hooks/usePointTracker";

export default function Home() {
  const ballRef = useRef<HTMLDivElement>(null);
  const { x, y } = usePointTracker(ballRef);

  return (
    <div className="h-screen bg-black">
      <motion.div
        ref={ballRef}
        className="absolute w-36 h-36 bg-sky-600 rounded-full"
        animate={{ x, y }}
      />
    </div>
  );
}
