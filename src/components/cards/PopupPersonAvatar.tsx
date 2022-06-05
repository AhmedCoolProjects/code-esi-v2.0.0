import { Popover } from "@mui/material";
import { PopupPersonAvatarProps } from "../../types";
import { PersonCard } from "./PersonCard";

export function PopupPersonAvatar(props: PopupPersonAvatarProps) {
  const { id, open, anchorEl, handleClose, person } = props;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {person.id ? <PersonCard person={person} /> : null}
    </Popover>
  );
}
