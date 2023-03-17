import Logo from "../assets/logo.svg";
export default function Header() {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="Logo Brandon CEBI" />
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </div>
  );
}
