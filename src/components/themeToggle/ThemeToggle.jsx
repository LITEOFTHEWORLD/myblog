"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/src/context/ThemeContext";
const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={styles.container}>
      <Image src="/moon.svg" alt="moon" width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src="/sun.svg" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
