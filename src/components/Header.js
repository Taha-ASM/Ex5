import headerImage from "../image/img/header.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="relative bg-gradient-to-br from-custom-purple-start to-custom-purple-end min-h-screen">
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-0">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-6xl text-white font-bold mb-4 leading-tight">
            Codex one of the best system in SAAS.
          </h1>
          <p className="mb-6 text-[#CFBDE8] py-2 text-lg w-full md:w-[29rem]">
            Mollit exercitation reprehenderit anim dolor et eu. Aliqua cillum
            dolor in aliquip occaecat sit et exercitation ea occaecat mollit
            officia.
          </p>
          <button className="bg-[#42B4EE] py-4 px-10 text-white rounded-lg shadow-md hover:bg-[#35A2DA] transition">
            Try A Live Demo
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={headerImage} alt="Header" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
