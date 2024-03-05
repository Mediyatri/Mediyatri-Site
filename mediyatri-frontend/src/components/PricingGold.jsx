import React from "react";

import { Button, Img, Text } from "components";

const DesignHomepagePricinggold = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-end justify-start w-full">
          <div className="flex flex-col items-start justify-end w-auto">
            <div className="bg-amber-A400_51 flex flex-row gap-2 items-center justify-start px-3 py-1.5 rounded w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_icontrending_lime_900_01.svg"
                alt="icontrending"
              />
              <Text
                className="text-center text-lime-900_01 text-xs w-auto"
                size="txtPoppinsSemiBold12Lime90001"
              >
                {props?.populartext}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-full"
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
            <div className="flex flex-row gap-4 items-center justify-start w-full">
              {!!props?.checkmark ? (
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="amber_A400"
                  size="xs"
                  variant="fill"
                >
                  <Img alt="checkmark" src={props?.checkmark} />
                </Button>
              ) : null}
              {!!props?.linktext1 ? (
                <Text
                  className="flex-1 text-gray-700 text-xs w-auto"
                  size="txtPoppinsMedium12"
                >
                  {props?.linktext1}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-full">
              {!!props?.checkmarkOne ? (
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="amber_A400"
                  size="xs"
                  variant="fill"
                >
                  <Img alt="checkmark_One" src={props?.checkmarkOne} />
                </Button>
              ) : null}
              {!!props?.linktext2 ? (
                <Text
                  className="flex-1 text-gray-700 text-xs w-auto"
                  size="txtPoppinsMedium12"
                >
                  {props?.linktext2}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-full">
              {!!props?.checkmarkTwo ? (
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="amber_A400"
                  size="xs"
                  variant="fill"
                >
                  <Img alt="checkmark_Two" src={props?.checkmarkTwo} />
                </Button>
              ) : null}
              {!!props?.linktext3 ? (
                <Text
                  className="flex-1 text-gray-700 text-xs w-auto"
                  size="txtPoppinsMedium12"
                >
                  {props?.linktext3}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-full">
              {!!props?.checkmarkThree ? (
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="amber_A400"
                  size="xs"
                  variant="fill"
                >
                  <Img alt="checkmark_Three" src={props?.checkmarkThree} />
                </Button>
              ) : null}
              {!!props?.linktext4 ? (
                <Text
                  className="flex-1 text-gray-700 text-xs w-auto"
                  size="txtPoppinsMedium12"
                >
                  {props?.linktext4}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-4 items-center justify-start w-full">
              {!!props?.checkmarkFour ? (
                <Button
                  className="flex h-5 items-center justify-center w-5"
                  shape="circle"
                  color="amber_A400"
                  size="xs"
                  variant="fill"
                >
                  <Img alt="checkmark_Four" src={props?.checkmarkFour} />
                </Button>
              ) : null}
              {!!props?.linktext5 ? (
                <Text
                  className="flex-1 text-gray-700 text-xs w-auto"
                  size="txtPoppinsMedium12"
                >
                  {props?.linktext5}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-auto">
          <div className="flex flex-col items-start justify-end w-auto">
            <Button
              className="!text-lime-900_01 cursor-pointer font-poppins font-semibold leading-[normal] min-w-[79px] rounded text-center text-xs"
              color="amber_A400_51"
              size="xs"
              variant="fill"
            >
              {props?.popularbutton}
            </Button>
          </div>
          <Button
            className="!text-gray-900 cursor-pointer font-bold font-poppins min-w-[142px] text-base text-center"
            shape="round"
            color="amber_A400"
            size="sm"
            variant="fill"
          >
            {props?.chooseplanbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

DesignHomepagePricinggold.defaultProps = {
  populartext: "3K+ users bought this",
  pricetext: "$150",
  basetext: "Gold",
  descriptiontext: "Premium Healthcare Concierge",
  popularbutton: "POPULAR",
  chooseplanbutton: "Choose Plan",
};

export default DesignHomepagePricinggold;
