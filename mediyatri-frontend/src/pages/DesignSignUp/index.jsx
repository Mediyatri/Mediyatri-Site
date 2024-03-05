import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

const DesignSignUpPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-center justify-between mx-auto md:pl-10 sm:pl-5 pl-[100px] w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-between md:mt-0 my-[27px] md:px-5 px-6 py-5 w-[505px] sm:w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col h-[103px] md:h-auto items-center justify-center p-2.5 w-[230px]">
              <Img
                className="md:h-auto h-full object-cover w-full"
                src="images/img_group11_91x226.png"
                alt="groupEleven"
              />
            </div>
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Text
                    className="text-gray-900_02 text-xl w-full"
                    size="txtPoppinsSemiBold20"
                  >
                    Create your Account
                  </Text>
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
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                          size="txtPoppinsRegular12"
                        >
                          Phone Number
                        </Text>
                      </div>
                      <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col items-start justify-start py-1 rounded w-full">
                        <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start pl-4 pr-2 w-full">
                          <div className="flex flex-1 flex-col items-start justify-center w-full">
                            <Text
                              className="text-gray-600 text-sm w-auto"
                              size="txtPoppinsRegular14Gray600"
                            >
                              Enter your phone number
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start px-1 py-3 w-auto">
                            <Text
                              className="text-light_blue-A700 text-sm w-auto"
                              size="txtPoppinsRegular14"
                            >
                              Get OTP
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                          size="txtPoppinsRegular12"
                        >
                          OTP
                        </Text>
                      </div>
                      <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col h-[52px] md:h-auto items-start justify-center py-1 rounded w-full">
                        <div className="flex flex-col items-start justify-start pl-4 pr-2 w-full">
                          <Input
                            name="placeholdervalu"
                            placeholder="Enter the OTP"
                            className="p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                            wrapClassName="w-[22%]"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="leading-[20.00px] max-w-[295px] md:max-w-full text-black-900 text-center text-xs tracking-[0.30px]"
                    size="txtPoppinsRegular12Black900"
                  >
                    <span className="text-black-900 font-poppins font-normal">
                      By continuing, you agree to MediYatri Company’s{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-black-900 font-poppins font-normal underline"
                    >
                      Terms of Use
                    </a>
                    <span className="text-black-900 font-poppins font-normal">
                      {" "}
                      and{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-black-900 font-poppins font-normal underline"
                    >
                      Privacy Policy.
                    </a>
                  </Text>
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Button
                    className="cursor-pointer font-bold text-base text-center w-full"
                    shape="round"
                    color="light_blue_900"
                    size="sm"
                    variant="fill"
                  >
                    Sign Up
                  </Button>
                  <Text
                    className="text-black-900 text-center text-xs tracking-[0.30px] w-auto"
                    size="txtPoppinsRegular12Black900"
                  >
                    or
                  </Text>
                  <div className="flex flex-row gap-8 items-center justify-start w-auto">
                    <Button
                      className="common-pointer border border-blue_gray-100 border-solid flex h-[60px] items-center justify-center rounded w-[60px]"
                      onClick={() => googleSignIn()}
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-11"
                        src="images/img_google.svg"
                        alt="google"
                      />
                    </Button>
                    <Line className="bg-blue_gray-400 h-4 w-px" />
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-[60px] items-center justify-start p-2 rounded w-[60px]">
                      <div className="flex flex-col h-11 items-center justify-end p-[3px] w-11">
                        <Img
                          className="h-9 md:h-auto object-cover w-9"
                          src="images/img_image68.png"
                          alt="imageSixtyEight"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <a
                  href="javascript:"
                  className="text-gray-900_02 text-xs tracking-[0.30px] w-auto"
                >
                  <Text size="txtPoppinsRegular12Gray90002">
                    Already have an account?
                  </Text>
                </a>
                <div className="flex flex-col items-start justify-start py-3 w-auto">
                  <a
                    href="javascript:"
                    className="text-light_blue-A700 text-right text-xs tracking-[0.30px] w-auto"
                  >
                    <Text size="txtPoppinsRegular12LightblueA700">
                      Login now
                    </Text>
                  </a>
                </div>
              </div>
            </div>
            <Button
              className="border-2 border-light_blue-900 border-solid cursor-pointer font-bold text-base text-center w-full"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Join Waitlist for B2B clients
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[55%] md:w-full">
          <Img
            className="h-[900px] md:h-auto object-cover w-full"
            src="images/img_image64_900x730.png"
            alt="imageSixtyFour"
          />
        </div>
      </div>
    </>
  );
};

export default DesignSignUpPage;
