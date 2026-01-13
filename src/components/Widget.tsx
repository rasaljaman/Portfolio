import { motion } from "framer-motion";

const Widget = ({ children, className, size = "small", onClick }) => {
  // Define sizes for grid spanning
  const sizeClasses = {
    small: "col-span-2 row-span-2",   // 1x1 square
    medium: "col-span-4 row-span-2",  // 2x1 wide rectangle
    large: "col-span-4 row-span-4",   // 2x2 large square
  };

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        ${sizeClasses[size]} 
        ${className}
        bg-ios-gray/80 backdrop-blur-md 
        rounded-[32px] p-5 relative overflow-hidden
        border border-white/5 shadow-lg
        cursor-pointer select-none
        flex flex-col justify-between
      `}
    >
      {children}
    </motion.div>
  );
};

export default Widget;
