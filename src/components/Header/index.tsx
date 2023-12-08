import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";

export const Header: FC<any> = () => {
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

  return (
    <div className={styles.header}>
      <Image
        src={"/assets/images/blogio.svg"}
        width={187}
        height={27}
        alt="logo"
      />
       <div>
        <label>
          <input
            type="checkbox"
            checked={selectedMode === 'MIJOZ'}
            onChange={() => handleCheckboxChange('MIJOZ')}
          />
          MIJOZ
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedMode === 'Blogger'}
            onChange={() => handleCheckboxChange('Blogger')}
          />
          Blogger
        </label>
      </div>
      <div>
        <button onClick={handleThemeChange}>Toggle Theme</button>
      </div>
      <p>Selected Mode: {selectedMode}</p>
    </div>
  );
};
