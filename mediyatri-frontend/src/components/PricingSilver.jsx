import React from "react";

import { Button, Img, Text } from "components";

const DesignHomepagePricingsilver = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-end justify-start w-full">
          <div className="bg-gray-400_33 flex flex-row gap-2 items-center justify-start px-3 py-1.5 rounded w-auto">
            <Img
              className="h-5 w-5"
              alt="icontrending"
              src={props?.trendingicon}
            />
            <Text
              className="text-black-900 text-center text-xs w-auto"
              size="txtPoppinsSemiBold12Black900"
            >
              {props?.populartext}
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
                size="txtPoppinsExtraBold36"
              >
                {props?.pricetext}
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                  size="txtPoppinsExtraBold28"
                >
                  {props?.basetext}
                </Text>
                <Text
                  className="max-w-[247px] md:max-w-full text-base text-gray-900"
                  size="txtPoppinsMedium16Gray900"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-5">
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="blue_gray_400_01"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark" />
                </Button>
              </div>
              <Text
                className="flex-1 text-gray-700 text-xs w-auto"
                size="txtPoppinsMedium12"
              >
                {props?.hashtagtext}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-5">
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="blue_gray_400_01"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark_One" />
                </Button>
              </div>
              <Text
                className="flex-1 text-gray-700 text-xs w-auto"
                size="txtPoppinsMedium12"
              >
                {props?.hashtagtextOne}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-5">
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="blue_gray_400_01"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark_Two" />
                </Button>
              </div>
              <Text
                className="flex-1 text-gray-700 text-xs w-auto"
                size="txtPoppinsMedium12"
              >
                {props?.hashtagtextTwo}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-5">
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="blue_gray_400_01"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark_Three" />
                </Button>
              </div>
              <Text
                className="flex-1 text-gray-700 text-xs w-auto"
                size="txtPoppinsMedium12"
              >
                {props?.hashtagtextThree}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-5">
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="blue_gray_400_01"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark_Four" />
                </Button>
              </div>
              <Text
                className="flex-1 text-gray-700 text-xs w-auto"
                size="txtPoppinsMedium12"
              >
                {props?.hashtagtextFour}
              </Text>
            </div>
          </div>
        </div>
        <Button
          className="!text-gray-700 border-2 border-gray-700 border-solid cursor-pointer font-bold font-poppins min-w-[142px] text-base text-center"
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          {props?.chooseplanbutton}
        </Button>
      </div>
    </>
  );
};

DesignHomepagePricingsilver.defaultProps = {
  trendingicon: "images/img_icontrending_black_900.svg",
  populartext: "2K+ users bought this",
  pricetext: "$100",
  basetext: "Silver",
  descriptiontext: "Enhanced Healthcare Experience",
  hashtagtext: "Detailed Hospital Profiles",
  hashtagtextOne: "Premium Travel Assistance",
  hashtagtextTwo: "Visa Concierge Service",
  hashtagtextThree: "Premium Accommodations",
  hashtagtextFour: "Dedicated Customer Support",
  chooseplanbutton: "Choose Plan",
};

export default DesignHomepagePricingsilver;
