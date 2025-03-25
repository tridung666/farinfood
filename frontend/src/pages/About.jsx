import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="mt-[80px] px-6 py-10 max-w-4xl mx-auto text-justify text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-[#01102E]">About Us</h1>

      <p className="mb-4">
        Established in <strong>2009</strong>, our company is proud to be one of the pioneers in introducing and distributing
        <strong>non-stick release oils</strong> to the Vietnamese market.
      </p>

      <p className="mb-4">
        It all began with a simple yet powerful dream: to bring specialized ingredients to the food industry — particularly the 
        <strong>confectionery and bakery production lines</strong>, where precision, hygiene, and performance are essential.
      </p>

      <p className="mb-4">
        Release oil plays a vital role in enhancing product quality, improving production efficiency, reducing costs, and ensuring
        food safety. We believe that even a small ingredient can make a <strong>significant difference</strong>.
      </p>

      <p className="mb-4">
        For more than a decade, we have been continuously researching, innovating, and partnering with global manufacturers
        to introduce premium non-stick oils — strictly meeting European standards — to food factories, bakeries, and confectionery
        workshops across Vietnam.
      </p>

      <p className="mb-4">
        Guided by our principle <strong>"Quality is Honor – Efficiency is Commitment"</strong>, we strive to accompany our customers
        through every step of growth — from production to distribution.
      </p>

      <p className="mt-6 text-center font-semibold">
        💡 Together with Viễn Đông – Shaping the future of Vietnam’s food industry.
      </p>
    </motion.div>
  );
};

export default About;
