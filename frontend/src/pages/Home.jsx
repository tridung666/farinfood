import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const banners = [banner1, banner2, banner3];

const swipeConfidenceThreshold = 100;

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setCurrentIndex((prev) =>
      (prev + newDirection + banners.length) % banners.length
    );
    setDirection(newDirection);
  };

  return (
    <div className="mt-[70px] w-full aspect-[16/9] overflow-hidden relative select-none">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x;

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1); // kéo sang trái → ảnh tiếp theo
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1); // kéo sang phải → ảnh trước
            }
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default Home;
