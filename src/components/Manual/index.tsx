import React, { useState } from "react";
//styles
import styles from "./index.module.sass";
// FC
import { FC } from "react";
// next components
import Image from "next/image";
import Link from "next/link";

export const Manual: FC<any> = () => {
    return (
        <div className={styles.manual}>
            <p className={styles.manual__title}>Xo'sh, bu qanday ishlaydi?</p>
            <div className={styles.manual__cards}>
                <div className={styles.manual__card}>
                    <Image src={'/assets/images/blogers.svg'} alt="bloggers" width={90} height={90} />
                    <p>Ishonchli bloggerlarni <span className={styles.manual__span}>toping</span> </p>
                </div>
                <div className={styles.manual__line}></div>

                <div className={styles.manual__card}>
                    <Image src={'/assets/images/uiw_pay.svg'} alt="bloggers" width={90} height={90} />
                    <p>TO'LOV <span className={styles.manual__span}>QILING</span></p>
                </div>
                <div className={styles.manual__line}></div>

                <div className={styles.manual__card}>
                    <Image src={'/assets/images/phone.svg'} alt="bloggers" width={90} height={90} />
                    <p className={styles.manual__text}> <span className={styles.manual__span}>BUYURTMALARNI</span>  BITTA  OYNADA BOSHQARING</p>
                </div>
            </div>
            <button className={styles.manual__btn}>BOSHLASH</button>
        </div>
    );
};
