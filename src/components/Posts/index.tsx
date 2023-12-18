import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";

export const Posts: FC<any> = () => {
    return (
        <div className={styles.posts}>
            <p className={styles.posts__title}>Ikki xil post qo'yish formati</p>
            <div className={styles.posts__cards}>

                <div className={styles.posts__card}>
                    <p className={styles.posts__cardTitle}>Tavsiyalar</p>
                    <p className={styles.posts__cardDesc}>Bloggerlar tabiiy ravishda mahsulot va uning afzalliklari
                        haqida gapirib, obunachilarga tavsiya qiladilar.</p>
                </div>

                <div className={styles.posts__card}>
                    <p className={styles.posts__cardTitle}>Tayyor market</p>
                    <p className={styles.posts__cardDesc}>Bloggerlar tayyor “hikoyangizni” История da nashr etishadi.
                        Tez natijalarga erishish va maksimal auditoriyani qamrab
                        olish uchun ideal format</p>
                </div>
            </div>
            <div className={styles.posts__story}>
                <Image className={styles.posts__image} src={'/assets/images/storyone.png'} alt="storyimage" width={179} height={317} />
                <Image className={styles.posts__image} src={'/assets/images/storytwo.png'} alt="storyimage" width={179} height={317} />
                <Image className={styles.posts__image} src={'/assets/images/storythree.png'} alt="storyimage" width={179} height={317} />
                <Image className={styles.posts__image} src={'/assets/images/storyfour.png'} alt="storyimage" width={179} height={317} />
                <Image className={styles.posts__image} src={'/assets/images/storyfive.png'} alt="storyimage" width={179} height={317} />
            </div>
            <button className={styles.posts__btn}>BOSHLASH</button>
        </div>
    );
};
