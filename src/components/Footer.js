import LogoImage from "../image/img/Logo.png";
import { ReactComponent as TwitterIcon } from "../image/icon/twitter.svg";
import { ReactComponent as FacebookIcon } from "../image/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../image/icon/instagram.svg";
import { ReactComponent as InIcon } from "../image/icon/In.svg";

export default function Footer() {
  return (
    <div className="bg-[#051114] pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-around">
          <div className="flex flex-col gap-4 mb-10 lg:mb-0">
            <img src={LogoImage} alt="" className="w-32" />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consect etur
              <br /> adipiscing elit. Ullamcorper purus eleifend
              <br /> purus faucibus faucibus.
            </p>
            <div className="flex gap-4">
              <a
                href=""
                className="border w-10 h-10 flex items-center justify-center rounded-full"
              >
                <TwitterIcon />
              </a>
              <a
                href=""
                className="border w-10 h-10 flex items-center justify-center rounded-full"
              >
                <FacebookIcon />
              </a>
              <a
                href=""
                className="border w-10 h-10 flex items-center justify-center rounded-full"
              >
                <InstagramIcon />
              </a>
              <a
                href=""
                className="border w-10 h-10 flex items-center justify-center rounded-full"
              >
                <InIcon />
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div>
              <h1 className="text-white text-2xl mb-5">Resources</h1>
              <ul className="flex flex-col gap-2">
                <a href="">
                  <li className="text-gray-400 hover:text-white">Services</li>
                </a>
                <a href="">
                  <li className="text-gray-400 hover:text-white">Pricing</li>
                </a>
                <a href="">
                  <li className="text-gray-400 hover:text-white">
                    Testimonials
                  </li>
                </a>
                <a href="">
                  <li className="text-gray-400 hover:text-white">Blog</li>
                </a>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-2xl mb-5">Useful links</h1>
              <ul className="flex flex-col gap-2">
                <a href="">
                  <li className="text-gray-400 hover:text-white">
                    Terms of Services
                  </li>
                </a>
                <a href="">
                  <li className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </li>
                </a>
                <a href="">
                  <li className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </li>
                </a>
                <a href="">
                  <li className="text-gray-400 hover:text-white">Contact us</li>
                </a>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-2xl mb-5">Newsletter</h1>
              <p className="text-gray-400 my-5">
                Sign up and receive the latest news via email.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-[#434C4E] bg-[#051114] text-white px-4 py-3 rounded-none sm:rounded-l-md outline-none mb-2 sm:mb-0"
                />
                <button className="bg-[#42B4EE] text-white font-bold px-7 py-3 border border-[#42B4EE] rounded-none sm:rounded-r-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-10 border-gray-600" />
        <div className="text-center py-7">
          <p className="text-gray-400">
            Copyright 2021 The Codext All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
