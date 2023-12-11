import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";

export const Header: FC<any> = () => {
  const [nightMode, setNightMode] = useState(false);
  const [selectedMode, setSelectedMode] = useState<"MIJOZ" | "Blogger">(
    "MIJOZ"
  );
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleCheckboxChange = (mode: "MIJOZ" | "Blogger") => {
    setSelectedMode(mode);
  };

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const toggleNightMode = () => {
    setNightMode((prevNightMode) => !prevNightMode);
  };

  return (
    <div className={styles.header}>

      <Image
        src={"/assets/images/blogio.svg"}
        width={187}
        height={40}
        alt="logo"
        className={styles.header__logo}
      />
      <div>
        <div className={styles.header__mode}>
          <p>MIJOZ</p>
          <div className={styles.header__select}>
            <div className={styles.header__circle}></div>
          </div>
          <p>BLOGGER</p>
          <ul className={styles.header__menu}>
            <div className={styles.header__services}>
              <li>XIZMATLAR</li>
              <Image className={styles.header__drop} src={'/assets/images/drop.svg'} alt="dropdown" width={10} height={9} />
            </div>
            <li>BLOG</li>
            <li>FAQ</li>
          </ul>
        </div>

      </div>

      <div className={styles.header__btns}>
        <button className={styles.header__start}>BOSHLASH</button>
        <div className={styles.header__login}>
          <p className={styles.header__text}>KIRISH</p>
          <Image className={styles.header__icon} src={'/assets/images/login.svg'} alt="login" width={18} height={27} />
        </div>
      </div>
    </div>
  );
};
