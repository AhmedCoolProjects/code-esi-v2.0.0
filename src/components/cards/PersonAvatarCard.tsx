import { IconButton } from "@mui/material";
import Image from "next/image";
import { PersonAvatarCardProps } from "../../types";

export function PersonAvatarCard(props: PersonAvatarCardProps) {
  const { member, onClick, id } = props;
  return (
    <IconButton onClick={(e) => onClick(e, member)} aria-describedby={id}>
      <Image
        width={55}
        height={55}
        src={member.image}
        className="rounded-full"
        objectFit="cover"
        alt={member.first_name + " " + member.last_name}
      />
    </IconButton>
  );
}
