import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";

export const Main: FC<any> = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main__section}>
                <p className={styles.main__title}>Mahsulotingizni Bloggerlar bilan reklama qiling</p>
                <p className={styles.main__desc}> <big>Blogio</big>  Bloggerlar Bilan ishlash uchun universal platforma.
                    Biz orqali ozingizga kerakli bolgan bloggerlarni toping
                    va oz marketingizni boshlang.</p>

                <button className={styles.main__btn}>BOSHLASH</button>
            </div>
            <div className={styles.main__imageSection}>
                <Image src={'/assets/images/socialgirl.png'} alt="socialgirl" width={718} height={710}/>
            </div>
        </div>
    );
};
