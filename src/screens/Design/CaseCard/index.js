import React from "react";
import styles from "./CaseCard.module.sass";
import { Link } from "react-router-dom";
import cn from "classnames";

const CaseCard = ({ title, description, imagePath, buttonLink }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <Link
          className={cn("button", styles.button)}
          to={buttonLink}
          target="_blank"
        >
          Case Study
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        <img
          srcSet={`${imagePath}@2x.png 2x`}
          src={`${imagePath}.png`}
          alt={title}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default CaseCard;
