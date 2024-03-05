import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleLangDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 1060);
    };

    // Set initial screen width on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobileScreen ? (
        // Render Mobile Header for mobile screens
        <MobileHeader isOpen={isOpen} handleLangDropdownToggle={handleLangDropdownToggle} />
      ) : (
        // Render Default Header for laptop screens
        <DesktopHeader />
      )}
    </>
  );

  function MobileHeader({ isOpen, handleLangDropdownToggle }) {
    return (
      <header className={props.className}>
        {/* Mobile Header */}
        <div className="mobile-logo flex sm:flex-row flex-row gap-5 items-center justify-between w-auto sm:w-full">
          {/* Mobile Logo */}
          <div
            className="common-pointer flex flex-col h-16 md:h-auto items-start justify-center p-2.5 w-[190px]"
            onClick={() => navigate("/")}
          >
            <Img
              className="md:h-auto h-full object-cover max-w-[250px]"
              src="images/img_group11.png"
              alt="groupEleven"
            />
          </div>
          {/* Button to Toggle Dropdown Menu */}
          <div className="mobile-dropdown-button">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[35px] md:min-w-[102px]"
              onClick={handleLangDropdownToggle}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
            {isOpen && (
              <div className="mobile-dropdown-menu">
                {/* Mobile Navigation Links */}
                <Link to="/services">
                  <Text
                    className="text-base text-center text-gray-700 w-auto"
                    size="txtPoppinsMedium16Gray700"
                  >
                    Services
                  </Text>
                </Link>
                <Link to="/pricing">
                  <Text
                    className="text-base text-center text-gray-700 w-auto"
                    size="txtPoppinsMedium16Gray700"
                  >
                    Pricing
                  </Text>
                </Link>
                <Link to="/getintouch">
                  <Text
                    className="text-base text-center text-gray-700 w-auto"
                    size="txtPoppinsMedium16Gray700"
                  >
                    Get in Touch
                  </Text>
                </Link>
                {/* Language Dropdown Button */}
                <div className="relative" onClick={handleLangDropdownToggle}>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[102px]"
                  >
                    <div className="!text-black-900 font-medium font-poppins leading-[normal] text-center text-sm">
                      English
                    </div>
                    <div className="absolute right-0 top-0 mt-2 mr-2">
                      <Img
                        className="rounded-[1px]"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    </div>
                  </Button>
                  {isOpen && (
                    <div
                      className="absolute right-10 mt-2 w-48 bg-white shadow-md rounded-md py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <ul className="block text-left px-4 py-2">
                        <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                          Bengali
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                          Arabic
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                {/* Login Button */}
                <Button
                  className="cursor-pointer font-bold font-poppins min-w-[85px] text-base text-center"
                  shape="round"
                  color="light_blue_900"
                  size="sm"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
            )}
          </div>
      </header>
    );
  }


  function DesktopHeader() {
    return (
      <header className={props.className}>
        {/* Default Header */}
        <div className="desktop-logo flex sm:flex-col flex-row gap-5 items-center justify-start w-auto sm:w-full">
          {/* Default Logo */}
          <div
            className="common-pointer flex flex-col h-16 md:h-auto items-start justify-center p-2.5 w-[190px]"
            onClick={() => navigate("/")}
          >
            <Img
              className="md:h-auto h-full object-cover w-full"
              src="images/img_group11.png"
              alt="groupEleven"
            />
          </div>
          {/* Default Navigation Links */}
          <div className="desktop-hamburger-menu flex flex-row gap-6 items-start justify-start w-auto">
            <Link to="/services">
              <Text
                className="text-base text-center text-gray-700 w-auto"
                size="txtPoppinsMedium16Gray700"
              >
                Services
              </Text>
            </Link>
            <Link to="/pricing">
              <Text
                className="text-base text-center text-gray-700 w-auto"
                size="txtPoppinsMedium16Gray700"
              >
                Pricing
              </Text>
            </Link>
            <Link to="/getintouch">
              <Text
                className="text-base text-center text-gray-700 w-auto"
                size="txtPoppinsMedium16Gray700"
              >
                Get in Touch
              </Text>
            </Link>
          </div>
        </div>
        {/* Default Language Dropdown Button */}
        <div className="desktop-actions flex flex-row gap-4 items-center justify-start w-auto">
          <div className="relative" onClick={handleLangDropdownToggle}>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[102px]"
            >
              <div className="!text-black-900 font-medium font-poppins leading-[normal] text-center text-sm">
                English
              </div>
              <div className="absolute right-0 top-0 mt-2 mr-2">
                <Img
                  className="rounded-[1px]"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              </div>
            </Button>
            {isOpen && (
              <div
                className="absolute right-90 mt-2 w-48 bg-white shadow-md rounded-md py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <ul className="block text-left px-4 py-2">
                  <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                    Bengali
                  </li>
                  <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">
                    Arabic
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Default Login Button */}
          <Button
            className="cursor-pointer font-bold font-poppins min-w-[85px] text-base text-center"
            shape="round"
            color="light_blue_900"
            size="sm"
            variant="fill"
          >
            Login
          </Button>
        </div>
      </header>
    );
  }
};

export default Header;
