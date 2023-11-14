// Accordion.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <button
        className="w-full text-left font-bold py-2 px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-4 border border-gray-300">{children}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
