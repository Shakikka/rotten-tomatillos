// import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import './ThrowMe.css'

export const Example = () => {
    const constraintsRef = useRef(null);

    return (
        <motion.header className="App-header" ref={constraintsRef}>Rotten T<span className="App-logo">🍅</span>matillos 
            <motion.img className="item" src="https://i.kym-cdn.com/entries/icons/facebook/000/000/297/asian_prince.jpg" drag dragConstraints={constraintsRef} />
        </motion.header>
    );
}; 