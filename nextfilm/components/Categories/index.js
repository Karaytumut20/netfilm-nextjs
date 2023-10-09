import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Categories({ categories }) {
  const whiteTextStyle = {
    color: 'white' // Yazı rengini beyaz yapmak için CSS stil tanımı
  };

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          className={styles.category}
          href={`/${category.id}`}
        >
          <div className={styles.name} style={whiteTextStyle}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
}

export { CategoriesLoading } from "./loading";
export { Categories };
