import React from 'react';
import {useState, useRef, useEffect} from "react";
import debounce from "lodash.debounce"
import styles from "./scrollmenu.module.css";
import Add1 from "../../img/Add1.jpg";
import Add2 from "../../img/Add2.jpeg";
import Add3 from "../../img/Add3.jpg";
import {wait} from "@testing-library/user-event/dist/utils";

export const ScrollMenu = () => {
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

    const listRef = useRef<HTMLUListElement>(null);

    const checkForScrollPosition = () => {
        const {current} = listRef;
        if (current) {
            const {scrollLeft, scrollWidth, clientWidth} = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

    const btnLeft = styles.btn + ' ' + styles.buttonLeft + ' ' + styles.buttonHidden;
    const btnRight = styles.btn + ' ' + styles.buttonRight + ' ' + styles.buttonHidden;
    // let srcleft = !canScrollLeft;
    // let srcright = !canScrollRight;
    // function left(dist: number) {
    //     srcleft = canScrollLeft;
    //     scrollContainerBy(dist);
    //     srcleft = !canScrollLeft;
    // }
    // function right(dist: number) {
    //     srcright = canScrollRight;
    //     scrollContainerBy(dist);
    //     srcright = !canScrollRight;
    // }

    const scrollContainerBy = (distance: number) =>
        listRef.current?.scrollBy({left: distance, behavior: "smooth"});


    useEffect(() => {
        const {current} = listRef;
        //block
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);
        //unlock

        return () => {
            current?.removeEventListener("scroll", debounceCheckForScrollPosition);
            debounceCheckForScrollPosition.cancel();
        };
    }, []);

    return (
        <div className={styles._bg}>
            <div className={styles.container}>
                <div className={styles.scrmenu}>
                    <button
                        type="button"
                        disabled={!canScrollLeft}
                        onClick={() => scrollContainerBy(-1210)}
                        // disabled={srcleft}
                        // onClick={() => left(-1200)}
                        // className={cn("btn", "buttonLeft", {
                        //     "button--hidden": !canScrollLeft
                        // })}
                        className={btnLeft}
                    >
                        ←
                    </button>
                    <ul className={styles.list} ref={listRef}>
                        <li className="item"><img className={styles.poster} src={Add1} alt="1 картинка"/></li>
                        <li className="item"><img className={styles.poster} src={Add2} alt="2 картинка"/></li>
                        <li className="item"><img className={styles.poster} src={Add3} alt="3 картинка"/></li>
                    </ul>
                    <button
                        type="button"
                        disabled={!canScrollRight}
                        onClick={() => scrollContainerBy(1210)}
                        // disabled={srcright}
                        // onClick={() => right(1200)}
                        // className={cn("btn", "buttonRight", {
                        //     "button--hidden": !canScrollRight
                        // })}
                        className={btnRight}
                    >
                        →
                    </button>
                    {canScrollLeft ? (
                        <div className="shadowWrapper leftShadowWrapper">
                            <div className="shadow leftShadow" />
                        </div>
                    ) : null}
                    {canScrollRight ? (
                        <div className="shadowWrapper rightShadowWrapper">
                            <div className="shadow rightShadow" />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ScrollMenu;