import React from "react";

import { Img, RatingBar, Text } from "components";

const DesignHomepageColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start px-5 py-6 rounded-lg w-full">
          <div className="flex flex-col gap-2 items-end justify-start w-auto">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Img
                className="h-[25px] w-[29px]"
                src="images/img_offer.svg"
                alt="offer"
              />
              <Text
                className="leading-[21.00px] max-w-[350px] md:max-w-full text-gray-900 text-sm"
                size="txtPoppinsRegular14Gray900"
              >
                {props?.offerdescription}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-end justify-between w-full">
              <div className="flex flex-col gap-6 h-[52px] md:h-auto items-start justify-between">
                <div className="flex flex-row items-start justify-start w-auto">
                  <RatingBar
                    className="flex justify-between w-28"
                    value={5}
                    starCount={5}
                    activeColor="#ffc600"
                    size={16}
                  ></RatingBar>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center w-auto">
                  <Text
                    className="text-blue_gray-400 text-xs w-auto"
                    size="txtPoppinsMedium12Bluegray400"
                  >
                    {props?.likescounter}
                  </Text>
                  <div className="bg-blue_gray-400 h-1 rounded-[50%] w-1"></div>
                  <Text
                    className="text-blue_gray-400 text-xs w-auto"
                    size="txtPoppinsMedium12Bluegray400"
                  >
                    {props?.viewscounter}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                  src="images/img_ellipse1.png"
                  alt="ellipseOne"
                />
                <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-xs w-auto"
                    size="txtPoppinsBold12"
                  >
                    {props?.username}
                  </Text>
                  <div className="flex flex-col items-start justify-start px-0.5 w-auto">
                    <Img
                      className="h-[11px] md:h-auto object-cover w-4 sm:w-full"
                      src="images/img_image66.png"
                      alt="imageSixtySix"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesignHomepageColumnOne.defaultProps = {
  offerdescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est consequat, pharetra ligula eu, pulvinar velit. Vestibulum dolor arcu, placerat vel turpis vitae, placerat hendrerit sapien. Duis id eleifend tellus. Vivamus lacinia ex id erat ornare ultrices. Vivamus malesuada turpis et diam facilisis varius.",
  likescounter: "750 Likes",
  viewscounter: "1290 Views",
  username: "Jane Doe",
};

export default DesignHomepageColumnOne;
