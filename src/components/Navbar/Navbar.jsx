import mod from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={mod.navbar}>
            <ul className={mod.navbar_list}>
                <li className={mod.navbar_li}><a href="#s" className={`${mod.navbar_link} ${mod.active}`}>My profile</a></li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Friends</a></li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Messenger</a></li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>News</a>
                </li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Communities</a></li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Photos</a></li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Music</a></li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Videos</a></li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Apps</a></li>
                <div className={mod.separator}></div>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Bookmarks</a></li>
                <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Files</a></li>

            </ul>
        </nav>

    );
};
export default Navbar;