import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import { MouseEvent, useState } from "react";
import { GET_PEOPLE_BY_CATEGORY } from "../src/apollo";
import {
  NoPartData,
  PersonAvatarCard,
  PersonAvatarSkeleton,
  PopupPersonAvatar,
} from "../src/components";
import { IMAGES } from "../src/constants";
import { PersonDataProps } from "../src/types";

const Home: NextPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [person, setPerson] = useState<PersonDataProps>({
    id: "",
    first_name: "",
    last_name: "",
    image: "",
    profession: "",
    email: "",
  });
  const [popupId, setPopupId] = useState<string>("");
  const handleClickOpenPopup = (
    event: MouseEvent<HTMLElement>,
    clickedPerson: PersonDataProps
  ) => {
    setPerson(clickedPerson);
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopup = () => {
    setAnchorEl(null);
  };

  const {
    data: dataBoard,
    loading: loadingBoard,
    error: errorBoard,
  } = useQuery(GET_PEOPLE_BY_CATEGORY, { variables: { category: "board" } });
  const {
    data: dataMemebres,
    loading: loadingMemebres,
    error: errorMemebres,
  } = useQuery(GET_PEOPLE_BY_CATEGORY, { variables: { category: "member" } });
  console.log("members: ", dataMemebres);
  return (
    <div>
      <Head>
        <title>CODE ESI | Dashboard</title>
      </Head>
      {/* CODE Core Team */}
      <section>
        <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
          <h1 className="text-xl font-semibold">CODE</h1>
          <h1 className="text-xl font-semibold opacity-70">Board</h1>
        </div>
        <div className="flex flex-row py-1 w-full overflow-x-auto scrollbar-hide px-2">
          {loadingBoard
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <PersonAvatarSkeleton size={55} key={item} />
              ))
            : dataBoard.getPersonsByCategory?.map((member: PersonDataProps) => (
                <PersonAvatarCard
                  key={member.id}
                  id={popupId}
                  member={member}
                  onClick={handleClickOpenPopup}
                />
              ))}
        </div>
      </section>
      <PopupPersonAvatar
        id={popupId}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClosePopup}
        person={person}
      />
      {/* CODE memebrs */}
      <section>
        <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
          <h1 className="text-xl font-semibold">CODE</h1>
          <h1 className="text-xl font-semibold opacity-70">Members</h1>
        </div>
        <div className="flex flex-row py-1 w-full overflow-x-auto scrollbar-hide px-2">
          {loadingMemebres
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <PersonAvatarSkeleton size={55} key={item} />
              ))
            : dataMemebres.getPersonsByCategory?.map(
                (member: PersonDataProps) => (
                  <PersonAvatarCard
                    key={member.id}
                    id={popupId}
                    member={member}
                    onClick={handleClickOpenPopup}
                  />
                )
              )}
        </div>
      </section>
      <main className="w-full">
        {/* CODE Projects */}
        <NoPartData
          title="Projects"
          image={IMAGES.noprojects}
          message="No projects yet"
        />
        {/* CODE Sharing Nights */}
        <NoPartData
          title="Sharing Nights"
          image={IMAGES.noprojects}
          message="No Sharing Nights yet"
        />
        {/* Competitions News */}
        <NoPartData
          title="News"
          image={IMAGES.noprojects}
          message="No News yet"
        />
        {/* CODE Collaborations */}
        <NoPartData
          title="Collaborations"
          image={IMAGES.noprojects}
          message="No Collaborations yet"
        />
      </main>
    </div>
  );
};

export default Home;
