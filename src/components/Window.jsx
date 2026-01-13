import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Window = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay behind the app */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />

          {/* The App Window Itself */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 z-50 bg-ios-gray rounded-[32px] overflow-hidden border border-white/10 shadow-2xl flex flex-col"
          >
            {/* Window Header */}
            <div className="h-16 bg-white/5 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 shrink-0">
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <button 
                onClick={onClose}
                className="w-8 h-8 bg-gray-600/50 rounded-full flex items-center justify-center hover:bg-gray-500/50 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Window Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 text-gray-200">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Window;
