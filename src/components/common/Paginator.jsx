import React from "react";
import mod from "./Paginator.module.css"


const Paginator = (props) => {

    let slicedPages = () => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let carousel = props.currentPage;
        let carouselLeft = ((carousel - 5) < 0) ? 0 : carousel - 4;
        let carouselRight = carousel + 4;
        return pages.slice(carouselLeft, carouselRight);
    }

    return (
            <div className={mod.paginator}>
                {
                    slicedPages().map( (p, index) => {
                        return <button key={index} className={props.currentPage === p && mod.selectedPage}
                                       onClick={() => {
                                           props.onPageChanged(p)
                                       }}>{p}</button>
                    })
                }
            </div>
    )
}

export default Paginator;
