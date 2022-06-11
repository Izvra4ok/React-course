import mod from "./../css/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={mod.navbar}>
      <ul className={mod.navbar_list}>
        <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Profile</a></li>
        <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Message</a></li>
        <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>News</a></li>
        <li className={mod.navbar_li}><a href="#s" className={`${mod.navbar_link} ${mod.active}`}>Music</a></li>
        <li className={mod.navbar_li}><a href="#s" className={mod.navbar_link}>Settings</a></li>
      </ul>
    </nav>

  );
};
export default Navbar;