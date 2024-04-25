import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>

      <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.category}>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Culture
        </Link>
      </div>
      <h2 className={styles.subtitle}>{"Chosen By Me"}</h2>
      <h1 className={styles.title}>Developer's Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/highland.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Life is a series of building, testing, changing and iterating.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>TechBlackGirl</span>
              <span className={styles.date}> - 24.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/highland.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Life is a series of building, testing, changing and iterating.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>TechBlackGirl</span>
              <span className={styles.date}> - 24.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/highland.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Life is a series of building, testing, changing and iterating.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>TechBlackGirl</span>
              <span className={styles.date}> - 24.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/highland.jpg" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Life is a series of building, testing, changing and iterating.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>TechBlackGirl</span>
              <span className={styles.date}> - 24.04.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
