import React from "react";

import { Button, Img, Text } from "components";

const DesignHomepagePricingcustom = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-end justify-start w-full">
            <div className="bg-black-900_33 flex flex-row gap-2 items-center justify-start px-3 py-1.5 rounded w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_icontrending_gray_900.svg"
                alt="icontrending"
              />
              <Text
                className="text-center text-gray-900 text-xs w-auto"
                size="txtPoppinsSemiBold12Gray900"
              >
                {props?.populartext}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                    size="txtPoppinsExtraBold28"
                  >
                    {props?.businessname}
                  </Text>
                  <Text
                    className="max-w-[247px] md:max-w-full text-base text-gray-900"
                    size="txtPoppinsMedium16Gray900"
                  >
                    {props?.businessdescription}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="text-gray-900 text-xs w-full"
            size="txtPoppinsMedium12Gray900"
          >
            {props?.makepackagetext}
          </Text>
        </div>
        <Button
          className="cursor-pointer font-bold font-poppins min-w-[142px] text-base text-center"
          shape="round"
          color="gray_900"
          size="sm"
          variant="fill"
        >
          {props?.getintouchbutton}
        </Button>
      </div>
    </>
  );
};

DesignHomepagePricingcustom.defaultProps = {
  populartext: "500+ users bought this",
  businessname: "FlexiCraft",
  businessdescription: "Tailor the package suiting your needs",
  makepackagetext: "Make Your Own Package",
  getintouchbutton: "Get in Touch",
};

export default DesignHomepagePricingcustom;
