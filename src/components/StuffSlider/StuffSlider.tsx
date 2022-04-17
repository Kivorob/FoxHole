import React from 'react';
import {useState, useEffect} from "react";
import styles from "./stuffslider.module.css"
import card1 from "../../img/card1.jpg"
import card2 from "../../img/card2.jpg"
import card3 from "../../img/card3.jpg"
import card4 from "../../img/card4.jpg"


const card = [
    <div className={styles.cardSty} key={card1}>
        <button className={styles.cardFav}>
            <svg width="28" height="28" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="currentColor" stroke-linejoin="round"/>
            </svg>
        </button>
        <img className={styles.cardImg} src={card1} alt="1"/>
        <p className={styles.cardName}>Glasses1</p>
        <div className={styles.cardUnderline}>
            <p className={styles.cardCost}>1000</p>
            <button>
                <svg width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>,
    <div className={styles.cardSty} key={card2}>
        <button className={styles.cardFav}>
            <svg width="28" height="28" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="currentColor" stroke-linejoin="round"/>
            </svg>
        </button>
        <img className={styles.cardImg} src={card2} alt="2"/>
        <p className={styles.cardName}>Glasses2</p>
        <div className={styles.cardUnderline}>
            <p className={styles.cardCost}>2000</p>
            <button>
                <svg width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>

    </div>,
    <div className={styles.cardSty} key={card3}>
        <button className={styles.cardFav}>
            <svg width="28" height="28" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="currentColor" stroke-linejoin="round"/>
            </svg>
        </button>
        <img className={styles.cardImg} src={card3} alt="3"/>
        <p className={styles.cardName}>Glasses3</p>
        <div className={styles.cardUnderline}>
            <p className={styles.cardCost}>3000</p>
            <button>
                <svg width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>,
    <div className={styles.cardSty} key={card4}>
        <button className={styles.cardFav}>
            <svg width="28" height="28" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="currentColor" stroke-linejoin="round"/>
            </svg>
        </button>
        <img className={styles.cardImg} src={card4} alt="4"/>
        <p className={styles.cardName}>Glasses4</p>
        <div className={styles.cardUnderline}>
            <p className={styles.cardCost}>4000</p>
            <button>
                <svg width="30" height="30" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5" stroke="currentColor"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>,

]


const StuffSlider = () => {

    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {

        const interval = setInterval(() => {

            setActiveIndex((current) => {

                const res: number = current === card.length - 1 ? 0 : current + 1

                return res
            })
        }, 5000)

        return () => clearInterval()
    }, [])


    const prevCardIndex = activeIndex ? activeIndex - 1 : card.length - 1

    const nextCardIndex = activeIndex === card.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <div className="slider-card slider-card-prev card"
                     key={prevCardIndex}>
                    {card[prevCardIndex]}
                </div>
                <div className="slider-card card"
                     key={activeIndex}>
                    {card[activeIndex]}
                </div>
                <div className="slider-card slider-card-next card"
                     key={nextCardIndex}>
                    {card[nextCardIndex]}
                </div>
            </div>
        </div>
    );
}

export default StuffSlider;
