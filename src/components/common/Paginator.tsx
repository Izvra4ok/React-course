import React from "react";
import mod from "./Paginator.module.css";
import clsn from "classnames";


type PropsType = {
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number,
    pageSize: number,
    currentPage: number
};

export const Paginator: React.FC<PropsType> = React.memo((props) => {


    const {onPageChanged, totalUsersCount, pageSize, currentPage} = props

    let slicedPages = () => {
        let pagesCount = Math.ceil(totalUsersCount / pageSize)
        let pages: Array<number> = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let carouselLeft = ((currentPage - 5) < 0) ? 0 : currentPage - 4;
        let carouselRight = currentPage + 5;
        return pages.slice(carouselLeft, carouselRight);
    }

    return (
        <div>
            {
                currentPage > 1 &&
                <button className={clsn(mod.paginator, mod.buttonPG)}
                        onClick={() => {
                            onPageChanged(currentPage - 1)
                        }}>PRE</button>
            }

            {
                slicedPages().map((p: number, index: number) => {
                    return <button key={index}
                                   className={clsn((currentPage === p && mod.selectedPage) || mod.paginator)}
                                   onClick={() => {
                                       onPageChanged(p)
                                   }}>{p}</button>
                })
            }

            { currentPage < Math.ceil(totalUsersCount / pageSize) &&
                <button className={mod.paginator && mod.buttonPG}
                        onClick={() => {
                            onPageChanged(currentPage + 1)
                        }}>NEXT</button>
            }
        </div>
    )
});



