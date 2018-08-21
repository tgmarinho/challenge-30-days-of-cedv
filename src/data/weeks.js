import React from "react";
import {
  Restaurant,
  LocalCafe,
  AccessibilityNew,
  SentimentVerySatisfied
} from "@material-ui/icons";

let id = 0;
const createData = (dia1, dia2, dia3, dia4, dia5, dia6, dia7) => {
  id += 1;
  return { id, dia1, dia2, dia3, dia4, dia5, dia6, dia7 };
};

export const weekOne = [
  createData(
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />
  ),
  createData("-", "-", <LocalCafe />, "-", "-", "-", "-"),
  createData(<AccessibilityNew />, "-", "-", "-", "-", "-", "-")
];

export const weekTwo = [
  createData(
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />
  ),
  createData("-", "-", <LocalCafe />, "-", <LocalCafe />, "-", "-"),
  createData(<AccessibilityNew />, "-", "-", "-", "-", "-", "-")
];

export const weekThree = [
  createData(
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />
  ),
  createData(<LocalCafe />, "-", <LocalCafe />, "-", <LocalCafe />, "-", "-"),
  createData(<AccessibilityNew />, "-", "-", "-", "-", "-", "-")
];

export const weekFour = [
  createData(
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />,
    <Restaurant />
  ),
  createData(
    <LocalCafe />,
    "-",
    <LocalCafe />,
    "-",
    <LocalCafe />,
    "-",
    <LocalCafe />
  ),
  createData(
    <AccessibilityNew />,
    "-",
    "-",
    "-",
    "-",
    "-",
    <SentimentVerySatisfied />
  )
];
