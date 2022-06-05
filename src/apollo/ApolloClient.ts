import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { ChatBotMessagesProps } from "../types";

export const isDarkModeVar = makeVar(true);
export const userVar = makeVar(null);
export const chatBotMessagesVar = makeVar<ChatBotMessagesProps[]>([]);

// Apollo GraphQL client.
export const ApolloCustomeClient = new ApolloClient({
  headers: {
    authorization: `ApiKey ${process.env.NEXT_PUBLIC_CODE_ESI_APOLLO_API_KEY}`,
  },
  uri: `${process.env.NEXT_PUBLIC_CODE_ESI_GRAPHQL_API}`,
  cache: new InMemoryCache(),
});
