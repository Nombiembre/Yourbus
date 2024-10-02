import React from "react";
import CustomText from "./CustomText";

const Title = ({ text, class: classes }) => {
  return (
    <CustomText className={`text-slate-700 text-2xl mb-2 font-ralebold ${classes}`}>
      {text}
    </CustomText>
  );
};

export default Title;
