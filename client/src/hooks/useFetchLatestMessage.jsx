import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { baseUrl, getRequest } from "../utils/service";

// FETCH LATEST MESSAGE IN A CHAT.
export const useFecthLatestMessage = (chat) => {
  const { newMessage } = useContext(ChatContext);
  const [latestMessage, setLatestMessage] = useState(null);

  // FETCH THE LATEST MESSAGE WHEN NEW MESSAGES ARRIVE.
  useEffect(() => {
    const getMessages = async () => {
      const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);

      if (response.error) {
        return console.log("Error getting messages...", error);
      }

      const lastMessage = response[response?.length - 1];

      setLatestMessage(lastMessage);
    };
    getMessages();
  }, [newMessage]);

  return { latestMessage };
};
