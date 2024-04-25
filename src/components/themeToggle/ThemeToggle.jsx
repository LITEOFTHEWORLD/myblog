"use client";

import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/src/context/ThemeContext";
const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#000" }
          : { backgroundColor: "#0f172a;" }
      }
    >
      <Image src="/moon.svg" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "light"
            ? { left: 1, backgroundColor: "#0f172a;" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.svg" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
