import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/service";

export const useFetchRecipientUserInfo = (chat, currentUser) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [recipientUserFetchError, setRecipientUserFetchError] = useState(null);

  const recipientId = chat?.members.find((id) => id !== currentUser?._id);

  // FETCH THE RECIPIENT USER DETAILS.
  useEffect(() => {
    const getRecipientUser = async () => {
      try {
        if (!recipientId) return null;

        const response = await getRequest(
          `${baseUrl}/users/find/${recipientId}`
        );

        setRecipientUser(response);
      } catch (error) {
        setRecipientUserFetchError(error);
        console.log(recipientUserFetchError);
      }
    };

    getRecipientUser();
  }, [recipientId]);

  return { recipientUser };
};
