import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "25px" }}>
      <h2>
        <Link to={"/"}>Home</Link>
      </h2>
      <h2>
        <Link to={"/about"}>About</Link>
      </h2>
      <h2>
        <Link to={"/contact"}>Contact</Link>
      </h2>
    </div>
  );
};

export default Navbar;
