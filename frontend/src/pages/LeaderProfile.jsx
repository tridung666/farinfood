import { useParams } from "react-router-dom";
import leaders from "../data/leaders";

const LeaderProfile = () => {
  const { id } = useParams();
  const leader = leaders.find((l) => l.id === id);

  if (!leader) return <div className="mt-[80px] p-6 text-center">Leader not found.</div>;

  return (
    <div className="mt-[80px] px-6 py-10 max-w-4xl mx-auto text-center">
      <img
        src={leader.image}
        alt={leader.name}
        className="w-52 h-52 rounded-full object-cover mx-auto mb-6 border-4 border-[#01102E]"
      />
      <h1 className="text-3xl font-bold text-[#01102E] mb-2">{leader.name}</h1>
      <p className="text-lg text-gray-700 mb-1">{leader.position}</p>
      <p className="text-sm text-gray-500 mb-4">Joined: {leader.joined}</p>
      <p className="text-gray-800">{leader.description}</p>
    </div>
  );
};

export default LeaderProfile;
