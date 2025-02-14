
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Hello, I'm <span className="text-primary">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Frontend Developer & UI/UX Designer
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
          View My Work
        </button>
      </motion.div>
    </section>
  );
};
