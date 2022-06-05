import Image from "next/image";
import { IconButton, Paper } from "@mui/material";
import { PersonCardProps, PersonDataProps } from "../../types";
import { IMAGES } from "../../constants";

export function PersonCard(props: PersonCardProps) {
  const { person } = props;
  return (
    <Paper
      elevation={3}
      className="p-5 h-full flex flex-col space-y-2 items-center w-full rounded-lg"
    >
      <div className="w-[200px] relative h-[200px]">
        <Image
          src={person.image}
          alt={person.first_name + " " + person.last_name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h1 className="px-1 font-light text-xl ">
        {person.first_name + " " + person.last_name}
      </h1>
      <h1 className="px-1 font-light text-base ">{person.profession}</h1>
      <div className="w-full items-center py-2 justify-center space-x-2 flex flex-row">
        {person.linkedin ? (
          <IconButton href={person.linkedin} target="_blank">
            <Image
              src={IMAGES.linkedin}
              width={40}
              height={40}
              alt={person.first_name + " " + person.last_name}
            />
          </IconButton>
        ) : null}
        {person.email ? (
          <IconButton href={`mailto:${person.email}`} target="_blank">
            <Image
              src={IMAGES.outlook}
              width={40}
              height={40}
              alt={person.first_name + " " + person.last_name}
            />
          </IconButton>
        ) : null}
      </div>
    </Paper>
  );
}
