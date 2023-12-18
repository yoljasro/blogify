import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";

export const Advertising: FC<any> = () => {
    return (
        <div className={styles.advertising}>
            <div className={styles.advertising__section}>
                <p className={styles.advertising__title}>Instagram Stories-da reklamalarni
                    bevosita bloggerlardan sotib oling</p>
                <p className={styles.advertising__desc}>“Hammasi bir platformada” marketing platformasi. O'zbekiston bo'ylab Instagram
                    kontent yaratuvchilarini toping, to'lang va ular bilan hamkorlik qiling!</p>
                    <button className={styles.advertising__btn}>BOSHLASH</button>
            </div>
            <div className={styles.advertising__section}>
                <Image className={styles.advertising__image} src={'/assets/images/iphone.png'} alt="iphone" width={255} height={455} />
            </div>
        </div>
    );
};
