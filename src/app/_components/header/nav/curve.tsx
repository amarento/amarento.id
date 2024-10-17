import React from 'react'
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Index() {

  const initialPath = `M0 ${window.innerHeight} L0 ${window.innerHeight} L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 ${window.innerHeight}`;
  
  // Set target path at the top of the screen
  const targetPath = `M100 0 L200 0 L200 0 L100 0 Q100 -${window.innerHeight / 2} 0 0`;
  
  const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: {duration: 0.0001, ease: [0.1, 1, 0.1, 1]}
    },
    exit: {
        d: initialPath,
        transition: {duration: 0.0001, ease: [0.1, 1, 0.1, 1]}
    }
  }

  return (
    <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-dark-green-default stroke-none">
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}