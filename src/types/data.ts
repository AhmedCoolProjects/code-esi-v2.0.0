import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type ActivitiesDataProps = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  link: string;
};

export type PathsDataProps = {
  id: number;
  title: string;
  path: string;
  icon: IconType;
};
export type SocialMediaDataProps = {
  id: number;
  title: string;
  icon: StaticImageData;
  link: string;
};
