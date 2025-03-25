import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-yellow-400 text-sm text-right px-4 py-2 flex justify-between items-center">
      {/* Hotline bên trái */}
      <div className="text-red-600 font-semibold">
        HOTLINE: 0919 838 786 - 098 1515 000
      </div>

      {/* Mạng xã hội bên phải */}
      <div className="flex space-x-2">
        <a href="#" className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full">
          <FaFacebookF size={14} />
        </a>
        <a href="#" className="bg-pink-600 hover:bg-pink-500 text-white p-2 rounded-full">
          <FaInstagram size={14} />
        </a>
        <a href="#" className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-full">
          <FaTwitter size={14} />
        </a>
        <a href="#" className="bg-black hover:bg-gray-700 text-white p-2 rounded-full">
          <FaEnvelope size={14} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
