import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
export default function Header() {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="Logo Brandon CEBI" className="w-[100px]" />
          </a>
          <button className="btn btn-sm">
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              spy={true}
              className=""
            >
              Me contacter
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
