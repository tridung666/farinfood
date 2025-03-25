import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#01102E] text-white py-14 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
        {/* Cột 1 - Giới thiệu */}
        <div>
          <h2 className="text-lg font-semibold mb-2">About Viễn Đông</h2>
          <p>
          Specializing in providing high quality products in the fields of food, ingredients and services.
          </p>
        </div>

        {/* Cột 2 - Liên hệ */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Liên hệ</h2>
          <p>📍 10 Tú Xương phường Hiệp Phú Thành phố Thủ Đức</p>
          <p>☎️ Hotline: 0914 091 100 - 0896 420 396(kỹ thuật)</p>
          <p>✉️ Email: farinvietnam@saigonnet.vn</p>
        </div>

        {/* Cột 3 - Mạng xã hội */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Kết nối với chúng tôi</h2>
          <div className="flex space-x-3 mt-2">
            <a href="https://www.facebook.com/tridung.eric" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/er.td_/" className="bg-pink-600 hover:bg-pink-500 p-2 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" className="bg-blue-500 hover:bg-blue-400 p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-black hover:bg-gray-700 p-2 rounded-full">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <div className="text-center text-xs mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Viễn Đông. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
