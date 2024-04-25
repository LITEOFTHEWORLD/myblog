import React from "react";
import styles from "./Navbar.module.css";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.jpg" alt="facebook" width={24} height={24} />
        <Image src="/instagram.jpg" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.jpg" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.jpg" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>2505Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/ " className={styles.link}>
          {" "}
          Homepage
        </Link>
        <Link href="/ " className={styles.link}>
          {" "}
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          {" "}
          About
        </Link>

        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
