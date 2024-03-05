// import React from "react";

// import { Img, Input, Text } from "components";

// const DesignHomepageHospitalcard = (props) => {
//   return (
//     <>
//       <div className={props.className}>
//         <div className="flex flex-col gap-2.5 items-start justify-start w-full">
//           <div className="flex flex-col items-start justify-start p-2 w-auto">
//             <Img
//               className="h-[81px] md:h-auto object-cover w-[121px] sm:w-full"
//               alt="imageSeven"
//               src={props?.userimage}
//             />
//           </div>
//           <div className="flex flex-col gap-1 items-start justify-start w-full">
//             <Text
//               className="text-base text-light_blue-900 w-full"
//               size="txtPoppinsMedium16Lightblue900"
//             >
//               {props?.cardiacspeciali}
//             </Text>
//             <Input
//               name="frame48095537"
//               placeholder="Delhi, Mumbai"
//               className="font-poppins p-0 placeholder:text-gray-900 sm:pr-5 text-gray-900 text-left text-xs w-full"
//               wrapClassName="flex pr-[35px] w-full"
//               prefix={
//                 <Img
//                   className="h-4 mr-1 my-px"
//                   src="images/img_icon_location.svg"
//                   alt="Icon/Location"
//                 />
//               }
//               size="xs"
//             ></Input>
//           </div>
//           <div className="flex flex-row gap-2.5 items-center justify-center py-2.5 rounded w-auto">
//             <Text
//               className="text-base text-gray-900 w-auto"
//               size="txtPoppinsSemiBold16"
//             >
//               {props?.buttontext}
//             </Text>
//             <Img
//               className="h-4 w-4"
//               src="images/img_iconexplore.svg"
//               alt="iconexplore"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// DesignHomepageHospitalcard.defaultProps = {
//   userimage: "images/img_image7.png",
//   cardiacspeciali: "Cardio Specialised",
//   buttontext: "Get Appointment Letter",
// };

// export default DesignHomepageHospitalcard;

// import React, { useState, useEffect } from "react";
// import { Img, Input, Text } from "components";

// const DesignHomepageHospitalcard = ({ hospitalName, city }) => {
//   return (
//     <>
//       <div className="flex flex-col gap-2.5 items-start justify-start w-full">
//         <div className="flex flex-col items-start justify-start p-2 w-auto">
//           <Img
//             className="h-[81px] md:h-auto object-cover w-[121px] sm:w-full"
//             alt="Hospital Image"
//             src="images/hospital_image_placeholder.jpg" // Placeholder image
//           />
//         </div>
//         <div className="flex flex-col gap-1 items-start justify-start w-full">
//           <Text
//             className="text-base text-light_blue-900 w-full"
//             size="txtPoppinsMedium16Lightblue900"
//           >
//             {hospitalName}
//           </Text>
//           <Input
//             name="hospitalLocation"
//             placeholder={city}
//             className="font-poppins p-0 placeholder:text-gray-900 sm:pr-5 text-gray-900 text-left text-xs w-full"
//             wrapClassName="flex pr-[35px] w-full"
//             prefix={
//               <Img
//                 className="h-4 mr-1 my-px"
//                 src="images/img_icon_location.svg"
//                 alt="Location Icon"
//               />
//             }
//             size="xs"
//             disabled
//           />
//         </div>
//         <div className="flex flex-row gap-2.5 items-center justify-center py-2.5 rounded w-auto">
//           <Text
//             className="text-base text-gray-900 w-auto"
//             size="txtPoppinsSemiBold16"
//           >
//             Get Appointment
//           </Text>
//           <Img
//             className="h-4 w-4"
//             src="images/img_iconexplore.svg"
//             alt="Explore Icon"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default DesignHomepageHospitalcard;

import React from "react";
import { Img, Input, Text } from "components";

const DesignHomepageHospitalcard = (props) => {
  console.log(props);
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start p-2 w-auto">
            <Img
              className="h-[81px] md:h-auto object-cover w-[121px] sm:w-full"
              alt="Hospital Image"
              src={props?.userimage}
            />
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text
              className="text-base text-light_blue-900 w-full"
              size="txtPoppinsMedium16Lightblue900"
            >
              {props?.hospitalName}
            </Text>
            <Text
              className="text-sm text-gray-900 w-full"
              size="txtPoppinsRegular14Gray900"
            >
              {props?.city}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-center py-2.5 rounded w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPoppinsSemiBold16"
            >
              {props?.buttontext}
            </Text>
            <Img
              className="h-4 w-4"
              src="images/img_iconexplore.svg"
              alt="iconexplore"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DesignHomepageHospitalcard.defaultProps = {
  userimage: "images/img_image7.png",
  buttontext: "Get Appointment Letter",
};

export default DesignHomepageHospitalcard;
