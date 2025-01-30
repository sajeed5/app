import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.trim().toUpperCase());
  };

  return (
    <motion.div className="search-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Room Number (e.g., A302)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">Find Block</button>
      </form>
    </motion.div>
  );
};

export default SearchBar;
