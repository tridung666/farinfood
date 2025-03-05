import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="p-6 text-center text-white bg-gray-500 min-h-screen pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Vien Dong</h2>
    </motion.div>
  );
};

export default About;
