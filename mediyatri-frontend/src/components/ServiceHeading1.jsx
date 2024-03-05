import React from "react";

import { Img, Text } from "components";

const DesignServicesHeadingbody1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start rounded-lg w-[41%] md:w-full">
          <Img
            className="h-[360px] md:h-auto object-cover rounded-lg w-full"
            alt="rectangleFifteen_One"
            src={props?.userimage}
          />
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
            size="txtPoppinsSemiBold24"
          >
            {props?.title}
          </Text>
          <Text
            className="leading-[31.00px] max-w-[679px] md:max-w-full text-base text-gray-700"
            size="txtPoppinsRegular16Gray700"
          >
            {props?.description}
          </Text>
        </div>
      </div>
    </>
  );
};

DesignServicesHeadingbody1.defaultProps = {
  userimage: "images/img_rectangle15_360x505.png",
  title: "Tailored Travel Solutions",
  description:
    "Travel with confidence as we provide comprehensive assistance in planning your journey. Our travel experts help you with visa processes, accommodation arrangements, and transportation, ensuring your focus remains on your health.",
};

export default DesignServicesHeadingbody1;
