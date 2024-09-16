import React from "react";
import CustomText from "./CustomText";

const Title = ({ text }) => {
  return <CustomText className="text-slate-700 text-3xl font-bold">{text}</CustomText>;
};

export default Title;
