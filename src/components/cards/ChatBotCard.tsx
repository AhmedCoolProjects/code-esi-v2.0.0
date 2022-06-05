import { Fab, IconButton, Input, Paper, Popover } from "@mui/material";
import { ChatBotMessagesProps, PopupChatBotCardProps } from "../../types";
import { IoSendOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { chatBotMessagesVar } from "../../apollo";
import { BsDot } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { THEME } from "../../constants";

const BotMessage = (props: ChatBotMessagesProps) => {
  const { message, date } = props;
  return (
    <Paper elevation={2} className="p-2 my-2 max-w-[250px]">
      <h1 className="text-sm">{message}</h1>
      <p className="text-right mt-1 w-full text-xs text-zinc-400">{date}</p>
    </Paper>
  );
};
const PersonMessage = (props: ChatBotMessagesProps) => {
  const { message, date } = props;
  return (
    <Paper
      elevation={2}
      className="p-2 my-2 ml-auto max-w-[250px]"
      style={{
        backgroundColor: "rgb(30 41 59)",
      }}
    >
      <h1 className="text-sm">{message}</h1>
      <p className="text-right mt-1 w-full text-xs text-zinc-400">{date}</p>
    </Paper>
  );
};

const WaitingTypingDots = () => {
  const [dots, setDots] = useState<number[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (dots.length < 3) {
        setDots([...dots, dots.length]);
      } else {
        setDots([]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [dots]);
  return (
    <Paper
      elevation={2}
      className="p-2 my-2 w-fit text-zinc-400 flex flex-row items-center"
    >
      {dots.map((dot) => (
        <BsDot key={dot} size={28} />
      ))}
    </Paper>
  );
};

export function ChatBotCard(porps: PopupChatBotCardProps) {
  const { id, open, anchorEl, handleClose } = porps;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [personMessageInput, setPersonMessageInput] = useState<string>("");
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(true);
  const [chatBotMessages, setChatBotMessages] = useState<
    ChatBotMessagesProps[]
  >([]);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (isLoadingMessages) {
      const interval = setInterval(() => {
        setIsLoadingMessages(false);
      }, 2000);
      return () => clearInterval(interval);
    } else {
      scrollToBottom();
    }
  }, [isLoadingMessages, chatBotMessages]);
  useEffect(() => {
    if (!isLoadingMessages) {
      setIsLoadingMessages(true);
    }
  }, [open]);
  useEffect(() => {
    setChatBotMessages(chatBotMessagesVar());
  }, [chatBotMessages]);
  const handleSendMessage = () => {
    setChatBotMessages([
      ...chatBotMessages,
      {
        message: personMessageInput,
        date: new Date().toLocaleString(),
        sender: "person",
      },
    ]);
    localStorage.setItem(
      "chatBotMessages",
      JSON.stringify([
        ...chatBotMessages,
        {
          message: personMessageInput,
          date: new Date().toLocaleString(),
          sender: "person",
        },
      ])
    );
    chatBotMessagesVar([
      ...chatBotMessages,
      {
        message: personMessageInput,
        date: new Date().toLocaleString(),
        sender: "person",
      },
    ]);

    setPersonMessageInput("");
  };
  const handleClearMessages = () => {
    localStorage.removeItem("chatBotMessages");
    chatBotMessagesVar([]);
    setChatBotMessages([]);
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={() => {
        handleClose();
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      className="p-4"
    >
      <div
        className="h-[430px]
      flex flex-col
      px-5 w-[350px]"
      >
        <header
          className="p-4 relative flex items-center justify-center flex-row border-gray-400
        border-b-[0.5px]
        text-center"
        >
          <h1 className="text-base font-semibold">JINA</h1>

          <IconButton
            disabled={chatBotMessages.length === 0}
            size="small"
            style={{
              position: "absolute",
              right: 0,
            }}
            onClick={handleClearMessages}
          >
            <MdDeleteForever
              style={{
                color:
                  chatBotMessages.length === 0 ? "gray" : THEME.primary.main,
              }}
              size={22}
            />
          </IconButton>
        </header>
        <main className="flex relative overflow-y-auto scrollbar-hide flex-col flex-1">
          {!isLoadingMessages ? (
            chatBotMessages.map((message, index) =>
              message.sender === "jina" ? (
                <BotMessage
                  key={`${index}`}
                  message={message.message}
                  date={message.date}
                  sender={message.sender}
                />
              ) : (
                <PersonMessage
                  key={`${index}`}
                  message={message.message}
                  date={message.date}
                  sender={message.sender}
                />
              )
            )
          ) : (
            <WaitingTypingDots />
          )}

          <div ref={messagesEndRef} />
        </main>
        <footer className="p-4 relative flex flex-row items-center space-x-2">
          <Input
            fullWidth
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
            placeholder="Enter your question..."
            type="text"
            value={personMessageInput}
            onChange={(e) => setPersonMessageInput(e.target.value)}
          />
          <IconButton
            disabled={!personMessageInput}
            onClick={handleSendMessage}
          >
            <IoSendOutline />
          </IconButton>
        </footer>
      </div>
    </Popover>
  );
}
