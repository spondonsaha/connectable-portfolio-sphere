
import { motion } from "framer-motion";
import { User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-8">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate frontend developer with 5 years of experience in
              creating beautiful and functional web applications. I specialize in
              React, TypeScript, and modern web technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My goal is to build user interfaces that are not only visually
              appealing but also intuitive and accessible to everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
