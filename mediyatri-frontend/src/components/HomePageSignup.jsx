import React from "react";
import { useState, useEffect } from "react";

import { Button, Img, Input, Line, Text } from "components";

// Amplify

import { Amplify } from "aws-amplify";
import { Hub } from 'aws-amplify/utils';
import { signInWithRedirect, getCurrentUser, signOut} from "aws-amplify/auth";



const DesignHomepageHomepagesignup = (props) => {
  const signIn = () => {};
  const verifyOtp = () => {};
  const verifyAuth = () => {};


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await getCurrentUser();
        setIsLoggedIn(!!user); // Set isLoggedIn based on user existence
        console.log('User:', user);
      } catch (error) {
        console.error('Error checking user:', error);
      }
    };

    checkUser();

    // Cleanup function to remove event listener on component unmount
    return () => Hub.removeListener('auth');
  }, []);

  const handleSignInWithGoogle = () => {
    signInWithRedirect({ });
  };

  //   const handleSignOut = async () => {
  //   try {
  //     await signOut();
  //     setIsLoggedIn(false);
  //     console.log('User signed out successfully');
  //   } catch (error) {
  //     console.error('Error signing out:', error);
  //   }
  // };

  const handleSignOut = async () => {
  try {
    await signOut(); // Perform sign-out
    setIsLoggedIn(false); // Update state

    // Clear Amplify user data (if applicable)
    await Amplify.Auth.currentSession(); // Attempt to clear current session
    await Amplify.Auth.signOut({ global: true }); // Sign out globally
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

  // Event listener for Amplify authentication events
  Hub.listen('auth', ({ payload }) => {
    switch (payload.event) {
      case 'signIn':
        setIsLoggedIn(true);
        break;
      case 'signOut':
        setIsLoggedIn(false);
        break;
    }
  });

  return (
    <>
      <div className={props.className}>
        <Text
          className="leading-[28.00px] max-w-[336px] md:max-w-full text-gray-900 text-xl"
          size="txtPoppinsSemiBold20Gray900"
        >
          {props?.description}
        </Text>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <div className="flex flex-col gap-1 h-[74px] md:h-auto items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                size="txtPoppinsRegular12"
              >
                {props?.fullname}
              </Text>
            </div>
            <Input
              name="logininput"
              placeholder="Enter your Name"
              className="font-poppins md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-left text-sm w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="round"
              color="gray_100"
              size="sm"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              {/* <Text
                className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                size="txtPoppinsRegular12"
              >
                {props?.phonenumber}
              </Text>
            </div>
            <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col items-start justify-start py-1 rounded w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start pl-4 pr-2 w-full">
                <div className="flex flex-1 flex-col items-start justify-center w-full">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtPoppinsRegular14Gray600"
                  >
                    {props?.enterphonecolumn}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start px-1 py-3 w-auto">
                  <Text
                    className="text-light_blue-A700 text-sm w-auto"
                    size="txtPoppinsRegular14"
                  >
                    {props?.getotp}
                  </Text>
                </div>
              </div> */}
            <div className="flex flex-col gap-1 h-[74px] md:h-auto items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                size="txtPoppinsRegular12"
              >
                {props?.phonenumber}
              </Text>
            </div>
            <Input
              name="logininput"
              placeholder="Enter your Phone Number"
              className="font-poppins md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-left text-sm w-full"
              wrapClassName="border border-gray-300 border-solid w-full"
              shape="round"
              color="gray_100"
              size="sm"
              variant="fill"
            ></Input>
          </div>
          </div>   
        </div>
          <div className="flex flex-col gap-5 items-center justify-start w-full">
          <Button
              className="!text-white-A700 cursor-pointer font-poppins text-base text-center w-full"
              shape="round"
              color="blue_gray_400"
              size="sm"
              variant="fill"
              onClick={signIn}
            >
              {props?.getotp}
            </Button>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-gray-900 text-xs tracking-[0.30px] w-auto"
                size="txtPoppinsRegular12"
              >
                {props?.otp}
              </Text>
            </div>
            <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col h-[52px] md:h-auto items-start justify-center py-1 rounded w-full">
              <div className="flex flex-col items-start justify-start pl-4 pr-2 w-full">
                <Input
                  name="placeholdervalu"
                  placeholder="Enter the OTP"
                  className="font-poppins p-0 placeholder:text-gray-600 text-gray-600 text-left text-sm w-full"
                  wrapClassName="w-[30%]"
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start w-full">
          <Button
            className="!text-white-A700 cursor-pointer font-bold font-poppins text-base text-center w-full"
            shape="round"
            color="blue_gray_400"
            size="sm"
            variant="fill"
            onClick={verifyOtp}
          >
            {props?.signupbutton}
          </Button>
          <Text
            className="text-black-900 text-center text-xs tracking-[0.30px] w-auto"
            size="txtPoppinsRegular12Black900"
          >
            {props?.or}
          </Text>
          <div className="flex flex-row gap-8 items-center justify-start w-auto">
            <Button
              onClick={handleSignInWithGoogle}
              className="border border-blue_gray-100 border-solid flex h-[60px] items-center justify-center rounded w-[60px]"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img className="h-11" src="images/img_google.svg" alt="google" />
            </Button>

        {isLoggedIn && (
          <Button
              onClick={handleSignOut}
              className="border border-blue_gray-100 border-solid flex h-[60px] items-center justify-center rounded w-[60px]"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Text>Sign Out</Text>
            </Button>
      )}

            <Line className="bg-blue_gray-400 h-4 w-px" />

            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col h-[60px] items-center justify-start p-2 rounded w-[60px]">
              <div className="flex flex-col h-11 items-center justify-end p-[3px] w-11">
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="images/img_image68.png"
                  alt="facebook"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesignHomepageHomepagesignup.defaultProps = {
  description:
    "Tell us a bit about yourself, we’ll tell a lot about more about us.",
  fullname: "Full Name",
  phonenumber: "Phone Number",
  enterphonecolumn: "Enter your phone number",
  getotp: "Get OTP",
  otp: "OTP",
  signupbutton: "Sign Up",
  or: "or",
};

export default DesignHomepageHomepagesignup;
