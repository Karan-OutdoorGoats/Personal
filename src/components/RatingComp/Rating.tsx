import {
  ItemStyles,
  Rating,
  RatingProps,
  ThinRoundedStar,
} from "@smastrom/react-rating";
import React from "react";

const myStyles: ItemStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

interface RatingCompProps {
  style?: React.CSSProperties;
  value: number;
  items: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
  itemStyles?: ItemStyles;
  onChange: any;
}

type RatingAndProps = RatingCompProps & RatingProps;

const RatingComp = (props: RatingAndProps) => {
  const { onChange, style, value, itemStyles, items, ...ratingProps } = props;

  return (
    <Rating
      readOnly
      style={{ width: "0.7rem", ...style }}
      value={value}
      items={items}
      itemStyles={{ ...myStyles, ...itemStyles }}
      onChange={onChange}
      {...ratingProps}
    />
  );
};

export default RatingComp;
