import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";

import { Amplify } from 'aws-amplify'; // Import Amplify from aws-amplify

const DesignLoginPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  // Function to handle Facebook login
 const handleFacebookLogin = async () => {
  try {
    const response = await Amplify.Auth.federatedSignIn({ provider: 'Facebook' });
    console.log('Facebook login response:', response);
  } catch (error) {
    console.error('Error signing in with Facebook:', error);
    alert('An error occurred during Facebook login. Please try again.');
  }
};


  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-10 md:gap-10 items-center justify-between mx-auto md:pl-10 sm:pl-5 pl-[100px] w-full">
        <div className="bg-white-A700 flex flex-col h-[687px] md:h-auto items-start justify-between md:mt-0 my-[106px] md:px-5 px-6 py-5 w-[505px] sm:w-full">
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
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="text-gray-900_02 text-xl w-full"
                    size="txtPoppinsSemiBold20"
                  >
                    Welcome Back
                  </Text>
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
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
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Button
                      className="cursor-pointer font-bold text-base text-center w-full"
                      shape="round"
                      color="light_blue_900"
                      size="sm"
                      variant="fill"
                    >
                      Login
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

                     {/* Facebook login button */}
                      <Button
                        className="common-pointer border border-blue_gray-100 border-solid flex h-[60px] items-center justify-center rounded w-[60px]"
                        onClick={handleFacebookLogin} // Attach Facebook login handler
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-11"
                          src="images/img_image68.png"
                          alt="facebook"
                        />
                      </Button>

                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text
                  className="text-gray-900_02 text-xs tracking-[0.30px] w-auto"
                  size="txtPoppinsRegular12Gray90002"
                >
                  Dont have an account?
                </Text>
                <div className="flex flex-col items-start justify-start py-3 w-auto">
                  <Text
                    className="text-light_blue-A700 text-right text-xs tracking-[0.30px] w-auto"
                    size="txtPoppinsRegular12LightblueA700"
                  >
                    Sign up now
                  </Text>
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

export default DesignLoginPage;
