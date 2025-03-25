import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import leaders from "../data/leaders";

const Leaders = () => {
  return (
    <motion.div
      className="mt-[80px] px-6 py-10 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-3xl font-bold text-center text-[#01102E] mb-8">
        Leadership Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <Link to={`/leaders/${leader.id}`} key={leader.id}>
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-[#01102E]"
              />
              <h2 className="text-xl font-semibold text-[#01102E]">{leader.name}</h2>
              <p className="text-gray-600">{leader.position}</p>
              <p className="text-sm text-gray-500">Joined: {leader.joined}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Leaders;
