import React from "react";
import { Banner } from "../banner";
import { banners } from "../../data/banners";

export const BannerContainer = () => {
  let num = 0;

  const result = banners.map((item) => {
    num += 1;
    if (num <= 3) {
      return <Banner key={item.id} area={"small"} img={item.url} title={item.title} text={item.text} />;
    } else if (num <= 5) {
      return <Banner key={item.id} area={"full"} img={item.url} title={item.title} text={item.text}/>;
    }else if(num > 5 && num <= 8){
      num = 0
      return <Banner key={item.id} area={"small"} img={item.url} title={item.title} text={item.text}/>;
    }
  });

  return result;
};
