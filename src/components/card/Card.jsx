import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/highland.jpg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>24.04.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>
            If we do not share our stories and shine a light on inequities,
            things will not change.
          </h1>
        </Link>

        <p className={styles.desc}>
          Recognize and embrace your uniqueness. I don’t think the ratios are
          going to change anytime soon. But, I don’t think it has to be a
          disadvantage. Being a Black woman, being a woman in general, on a team
          of all men, means that you are going to have a unique voice. It’s
          important to embrace that.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
