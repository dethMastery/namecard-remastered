import { mainData, photoData } from "../Modules/data";
import { Card } from "./Card";

export const CardSwitch = ({
  cardType,
  animation,
}: {
  cardType: boolean;
  animation: boolean;
}) => {
  if (!cardType) {
    return <Card animation={animation} data={mainData} />;
  } else {
    return <Card animation={animation} data={photoData} />;
  }
};
