import { MouseEvent, useEffect, useMemo, useState } from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  Fab,
  ThemeProvider,
} from "@mui/material";
import { useReactiveVar } from "@apollo/client";
import { IMAGES, THEME } from "../../../constants";
import { chatBotMessagesVar, isDarkModeVar } from "../../../apollo";
import { MainFooter } from "../Footers";
import { MainHeader } from "../Headers";
import { LeftLayout } from "./LeftLayout";
import Image from "next/image";
import { ChatBotCard } from "../../cards";
import { ChatBotMessagesProps } from "../../../types";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;
  const isDark = useReactiveVar(isDarkModeVar);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
          primary: THEME.primary,
          secondary: THEME.secondary,
        },
      }),
    [isDark]
  );

  useEffect(() => {
    const chatBotMessagesLocalStorage = localStorage.getItem("chatBotMessages");
    if (chatBotMessagesLocalStorage) {
      chatBotMessagesVar(JSON.parse(chatBotMessagesLocalStorage));
    } else {
      const chatBotStarterMessages: ChatBotMessagesProps[] = [
        {
          message:
            "Hi, I'm JINA, the CODE ESI Chat Bot. I can help you to find the best course for you. Just type your question and I will try to answer it.",
          date: new Date().toLocaleString(),
          sender: "jina",
        },
      ];
      localStorage.setItem(
        "chatBotMessages",
        JSON.stringify(chatBotStarterMessages)
      );
      chatBotMessagesVar(chatBotStarterMessages);
    }
  }, []);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickOpenChatBotPopup = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseChatBotPopup = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <div className="grid grid-cols-12 w-full gap-2">
          <div className="flex-col h-screen col-span-0 md:col-span-3 hidden md:flex  p-3 border-r-[1px] border-gray-400">
            <LeftLayout />
          </div>
          <div className="flex-col h-screen scrollbar-custom overflow-y-auto col-span-12 md:col-span-9 p-3 ">
            <MainHeader />
            {children}
            <MainFooter />
          </div>
          <Fab
            id="chat-bot-popup"
            onClick={handleClickOpenChatBotPopup}
            style={{
              zIndex: "1000",
              bottom: 28,
              right: 28,
              position: "fixed",
            }}
          >
            <Image src={IMAGES.bot} width={28} height={28} alt="bot" />
          </Fab>
        </div>
        <ChatBotCard
          anchorEl={anchorEl}
          open={open}
          handleClose={handleCloseChatBotPopup}
          id="chat-bot-popup"
        />
      </Container>
    </ThemeProvider>
  );
}
