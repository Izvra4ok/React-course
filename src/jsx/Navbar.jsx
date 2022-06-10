import "./../css/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_list">
        <li className="navbar_li"><a href="#s" className="navbar_link">Profile</a></li>
        <li className="navbar_li"><a href="#s" className="navbar_link">Message</a></li>
        <li className="navbar_li"><a href="#s" className="navbar_link">News</a></li>
        <li className="navbar_li"><a href="#s" className="navbar_link">Music</a></li>
        <li className="navbar_li"><a href="#s" className="navbar_link">Settings</a></li>
      </ul>
    </nav>

  );
};
export default Navbar;