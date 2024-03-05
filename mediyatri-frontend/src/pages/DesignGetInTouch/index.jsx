import React from "react";

import { Button, Img, Input, List, Text } from "components";
import DesignHomepageFooterwhite from "components/HomePageFooter";
import Header from "components/Header";

const DesignGetInTouchPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-10 items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col md:gap-10 h-20 md:h-auto items-center justify-between md:px-5 px-[100px] py-2 w-full" />
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:px-5 w-[51%] md:w-full">
              <Img
                className="h-[944px] md:h-auto object-cover w-full"
                src="images/img_image64.png"
                alt="imageSixtyFour"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start md:px-5 px-[120px] py-20 w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900_02 w-full"
                        size="txtPoppinsSemiBold40"
                      >
                        Get in Touch
                      </Text>
                      <Text
                        className="leading-[28.00px] max-w-[470px] md:max-w-full text-base text-gray-900_02"
                        size="txtPoppinsRegular16Gray90002"
                      >
                        We will help to customise your travel journey, we are
                        just a click away. Shoot out your questions.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col gap-1 h-[74px] md:h-auto items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Full Name
                          </Text>
                        </div>
                        <Input
                          name="logininput"
                          placeholder="Enter your Name"
                          className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          type="text"
                          shape="round"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-1 h-[74px] md:h-auto items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Phone Number
                          </Text>
                        </div>
                        <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col h-[52px] md:h-auto items-start justify-center py-1 rounded w-full">
                          <div className="flex flex-col items-center justify-start pl-4 pr-2 w-full">
                            <Input
                              name="placeholdervalu"
                              placeholder="Enter your phone number"
                              className="p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-sm w-full"
                              wrapClassName="pr-[35px] w-full"
                              type="number"
                              size="xs"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                            size="txtPoppinsRegular12"
                          >
                            E-Mail ID
                          </Text>
                        </div>
                        <Input
                          name="logininput_One"
                          placeholder="Enter your E-mail ID"
                          className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          type="email"
                          shape="round"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                            size="txtPoppinsRegular12"
                          >
                            Message
                          </Text>
                        </div>
                        <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col h-[278px] md:h-auto items-start justify-start py-2.5 rounded w-full">
                          <div className="flex flex-col items-start justify-start pl-4 pr-2 w-full">
                            <div className="flex flex-col items-start justify-center w-auto">
                              <Text
                                className="text-gray-600 text-sm w-auto"
                                size="txtPoppinsRegular14Gray600"
                              >
                                Write your Message
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[159px] text-base text-center"
                  shape="round"
                  color="light_blue_900"
                  size="sm"
                  variant="fill"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          <DesignHomepageFooterwhite className="flex flex-col items-start justify-start w-full md:w-full" />
        </div>
      </div>
    </>
  );
};

export default DesignGetInTouchPage;
