
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-8">
            <Mail className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Contact Me</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
              <button className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
