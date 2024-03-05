import React from "react";

const sizeClasses = {
  txtPoppinsMedium12Gray900: "font-medium font-poppins",
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsRegular12Gray90002: "font-normal font-poppins",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsMedium12Bluegray400: "font-medium font-poppins",
  txtPoppinsBold12: "font-bold font-poppins",
  txtPoppinsRegular18Black900: "font-normal font-poppins",
  txtPoppinsBold36: "font-bold font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsExtraBold36: "font-extrabold font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsRegular18Gray90001: "font-normal font-poppins",
  txtPoppinsSemiBold12Lime90001: "font-poppins font-semibold",
  txtPoppinsMedium16Lightblue900: "font-medium font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold40: "font-bold font-poppins",
  txtPoppinsSemiBold12Gray900: "font-poppins font-semibold",
  txtPoppinsRegular12LightblueA700: "font-normal font-poppins",
  txtPoppinsSemiBold40: "font-poppins font-semibold",
  txtPoppinsSemiBold20Gray900: "font-poppins font-semibold",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsBold16WhiteA700: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsBold24: "font-bold font-poppins",
  txtPoppinsRegular12Black900: "font-normal font-poppins",
  txtPoppinsRegular16Gray90002: "font-normal font-poppins",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsSemiBold16Lightblue900: "font-poppins font-semibold",
  txtPoppinsRegular14Gray900: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular16Gray700: "font-normal font-poppins",
  txtPoppinsRegular14Gray600: "font-normal font-poppins",
  txtPoppinsRegular18Gray700: "font-normal font-poppins",
  txtPoppinsMedium16Gray900: "font-medium font-poppins",
  txtPoppinsBold36Black900: "font-bold font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
  txtPoppinsSemiBold12Black900: "font-poppins font-semibold",
  txtPoppinsMedium16Gray700: "font-medium font-poppins",
  txtPoppinsRegular14Gray90002: "font-normal font-poppins",
  txtPoppinsExtraBold28: "font-extrabold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
