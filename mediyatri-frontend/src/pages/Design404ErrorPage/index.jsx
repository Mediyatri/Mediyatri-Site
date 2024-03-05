import React from "react";

import { Button, Img, List, Text } from "components";
import DesignHomepageFooterwhite from "components/HomePageFooter";
import Header from "components/Header";

const Design404ErrorPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-10 items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-10 h-20 md:h-auto items-center justify-between md:px-5 px-[100px] py-2 w-full" />
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-5 items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-10 w-full">
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[54.00px] max-w-[590px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900"
                  size="txtPoppinsBold36"
                >
                  404 Error: Page Lost in the Health Maze
                </Text>
                <Text
                  className="leading-[32.00px] text-gray-900_01 text-lg"
                  size="txtPoppinsRegular18Gray90001"
                >
                  <>
                    Uh-oh! It seems the page you&#39;re looking for has gone for
                    a wellness walk.
                    <br />
                    Don&#39;t worry; we&#39;re on the case. In the meantime,
                    feel free to navigate back to the homepage and explore our
                    healthy offerings.
                    <br />
                    Thanks for your understanding!
                  </>
                </Text>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[154px] text-base text-center"
                shape="round"
                color="gray_900"
                size="sm"
                variant="fill"
              >
                Back to Home
              </Button>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:px-5 w-auto md:w-full">
              <Img
                className="h-[449px] sm:h-auto object-cover w-[597px] md:w-full"
                src="images/img_implementationcopy3x100.png"
                alt="implementationc"
              />
            </div>
          </div>
          <div className="bg-light_blue-900 flex md:flex-col flex-row md:gap-10 gap-[125px] items-center justify-start max-w-[1440px] md:px-10 sm:px-5 px-[100px] py-8 w-full">
            <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtPoppinsBold24"
                >
                  Connect with Us for Tailored Assistance
                </Text>
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  We will help to customise your travel journey, we are just a
                  click away.
                </Text>
              </div>
              <Button
                className="border-2 border-light_blue-900 border-solid cursor-pointer font-bold min-w-[142px] text-base text-center"
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                Get in Touch
              </Button>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-auto">
              <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconphone.svg"
                  alt="iconphone"
                />
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16"
                >
                  +91 9876543210
                </Text>
              </div>
              <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconemail.svg"
                  alt="iconemail"
                />
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16"
                >
                  info@mediyatri.com
                </Text>
              </div>
            </div>
          </div>
          <DesignHomepageFooterwhite className="flex flex-col items-start justify-start w-auto md:w-full" />
        </div>
      </div>
    </>
  );
};

export default Design404ErrorPagePage;
