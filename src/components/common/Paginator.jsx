import React from "react";
import mod from "./Paginator.module.css";


const Paginator = (props) => {

    let carousel =props.currentPage;

    let slicedPages = () => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let carouselLeft = ((carousel - 5) < 0) ? 0 : carousel - 4;
        let carouselRight = carousel + 5;
        return pages.slice(carouselLeft, carouselRight);
    }

    return (
            <div>
                {
                    carousel > 1 &&
                <button className={mod.paginator && mod.buttonPG}
                        onClick={() => {
                            props.onPageChanged(carousel -1)}}>PRE</button>
                }

                {
                    slicedPages().map( (p, index) => {
                        return <button key={index}
                                    className={(props.currentPage === p && mod.selectedPage) || mod.paginator}
                                    onClick={() => {
                                        props.onPageChanged(p)
                                    }}>{p}</button>

                    })
                }

                {
                    <button className={mod.paginator && mod.buttonPG}
                            onClick={() => {
                                props.onPageChanged(carousel + 1 )}}>NEXT</button>
                }
            </div>
    )
}


export default Paginator;

