import Head from "next/head";
import { Grid } from "@mui/material";
import { NextPage } from "next";
import { GET_PEOPLE_BY_CATEGORY } from "../../src/apollo";
import { PersonCard, PersonCardSkeleton } from "../../src/components";
import { PersonDataProps } from "../../src/types";
import { useQuery } from "@apollo/client";

const Index: NextPage = () => {
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
  return (
    <div>
      <Head>
        <title>CODE ESI | About</title>
      </Head>
      <div className="w-full">
        {/* CODE Board */}
        <div className="w-full">
          <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
            <h1 className="text-xl font-semibold">CODE</h1>
            <h1 className="text-xl font-semibold opacity-70">Board</h1>
          </div>
          <Grid container spacing={3}>
            {loadingBoard
              ? [1, 2, 3].map((i) => (
                  <Grid key={i} item xs={12} md={4} sm={6}>
                    <PersonCardSkeleton />
                  </Grid>
                ))
              : dataBoard.getPersonsByCategory?.map(
                  (person: PersonDataProps) => (
                    <Grid key={person.id} item xs={12} md={4} sm={6}>
                      <PersonCard person={person} />
                    </Grid>
                  )
                )}
          </Grid>
        </div>
        {/* CODE Members */}
        <div className="w-full">
          <div className="mt-10 mb-3 flex flex-row space-x-2 items-center">
            <h1 className="text-xl font-semibold">CODE</h1>
            <h1 className="text-xl font-semibold opacity-70">Members</h1>
          </div>
          <Grid container spacing={3}>
            {loadingMemebres
              ? [1, 2, 3].map((i) => (
                  <Grid key={i} item xs={12} md={4} sm={6}>
                    <PersonCardSkeleton />
                  </Grid>
                ))
              : dataMemebres.getPersonsByCategory?.map(
                  (person: PersonDataProps) => (
                    <Grid key={person.id} item xs={12} md={4} sm={6}>
                      <PersonCard person={person} />
                    </Grid>
                  )
                )}
          </Grid>
        </div>
        {/* CODE Guests */}
        {/* CODE Collaborators */}
      </div>
    </div>
  );
};

export default Index;
