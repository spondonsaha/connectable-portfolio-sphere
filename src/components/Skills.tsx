
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Node.js", level: 75 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Skills & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-primary h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
