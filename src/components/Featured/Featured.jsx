import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, 2505 is here!</b> To share and create
        memories
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/highland.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Trust in yourself, believe that your voice matters, and know that
            your words are good enough
          </h1>
          <p className={styles.postDesc}>
            It’s not enough to be aware of the possibilities. You have to
            believe that your goals are attainable. First, can you see yourself,
            picture yourself as an engineer? I strongly believe that belief in
            yourself stems from belief in your role models.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
