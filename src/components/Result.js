import React from "react";
import { motion } from "framer-motion";

const Result = ({ room, result }) => {
  if (!room || result === null) return null; // Ensures the box disappears when input is cleared

  const formattedResult = result.replace(/\[(.*?)\]/g, `<br /><span class="highlight">$1</span>`);

  return (
    <motion.div className="result-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="result-card">
        <h2>Room: {room}</h2>
        <p dangerouslySetInnerHTML={{ __html: formattedResult }} />
      </div>
    </motion.div>
  );
};

export default Result;
