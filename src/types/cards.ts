import { StaticImageData } from "next/image";
import React, { MouseEvent } from "react";
import { ActivitiesDataProps, PathsDataProps } from "./data";

export type PersonDataProps = {
  id: string;
  first_name: string;
  last_name: string;
  email?: string;
  linkedin?: string;
  profession: string;
  image: string;
  category?: string;
  post?: string;
  is_hidden?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type PersonAvatarCardProps = {
  member: PersonDataProps;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    member: PersonDataProps
  ) => void;
  id: string;
};

export type PersonCardProps = {
  person: PersonDataProps;
};

export type PopupPersonAvatarProps = {
  id: string;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  person: PersonDataProps;
};
export type PopupChatBotCardProps = {
  id: string;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
};

export type ActivityCardProps = {
  activity: ActivitiesDataProps;
};

export type NavigationMenuProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  data: PathsDataProps[];
};

export type NoPartDataProps = {
  message: string;
  image: StaticImageData;
  title: string;
};

export type ChatBotMessagesProps = {
  date: string;
  message: string;
  sender: string;
};
