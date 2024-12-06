import LogoImage from "../image/img/Logo.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState("");

  function handlscroll() {
    if (window.scrollY > 70) setIsScroll("bg-purple-800");
    else setIsScroll("");
  }

  useEffect(() => {
    window.addEventListener("scroll", handlscroll);

    return () => window.removeEventListener("scroll", handlscroll);
  }, []);
  return (
    <div className={`fixed z-10 w-full top-0 py-7 ${isScroll}`}>
      <nav className="container mx-auto flex items-center justify-between px-6 md:px-0">
        <div>
          <img src={LogoImage} alt="Codex Logo" className="w-32" />
        </div>
        <div className="flex items-center gap-14">
          <ul className="flex gap-10">
            <li>
              <a
                href="#"
                className="text-[#44B4EE] hover:text-[#34A2D9] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#CFBDE8] transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#CFBDE8] transition"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#CFBDE8] transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-[#CFBDE8] transition"
              >
                Blog
              </a>
            </li>
          </ul>
          <button className="bg-[#42B4EE] py-3 px-10 text-white rounded-lg shadow-md hover:bg-[#35A2DA] transition">
            FREE TRIAL
          </button>
        </div>
      </nav>
    </div>
  );
}
