import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { rollrush } from "../assets";

import Button from "./Button";
// import { ethers } from "ethers";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useEffect, useState } from "react";
import { useWalletStore } from "../store/store";
// import { useSDK } from "@metamask/sdk-react";

const Header = () => {
  // const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const {
    checkIfLoggedIn,
    // toggleMenu,
    walletAddress,
    // isMenuOpen,
    // updateWalletAddress,
  } = useWalletStore();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  useEffect(() => {
    checkIfLoggedIn();
    console.log(walletAddress, " this is wallet");
  }, []);
  // const handleClick = () => {
  //   if (!openNavigation) return;

  //   enablePageScroll();
  //   setOpenNavigation(false);
  // };

  const btnhandler = async () => {
    // Asking if metamask is already present or not
    console.log("btn handkers");

    if ((window as any).ethereum) {
      console.log("inside condition", (window as any).ethereum);
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      // res[0] for fetching a first wallet
      // (window as any).ethereum
      //   .request({ method: "eth_requestAccounts" })
      //   .then((res: any) => updateWalletAddress(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="https://app.rollrush.xyz/">
          <img src={rollrush} width={190} height={40} alt="Rollrush" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))} */}
          </div>

          <HamburgerMenu />
        </nav>
        <Button
          className=" lg:flex px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 "
          href="https://app.rollrush.xyz/"
        >
          Capsule
        </Button>
        <Button onClick={btnhandler} className="hidden lg:flex">
          {walletAddress}
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
