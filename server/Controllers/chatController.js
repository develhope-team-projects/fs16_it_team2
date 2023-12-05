const chatModel = require("../Models/chatModel");

// CREATE A CHAT BETWEEN 2 USERS
const createChat = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    // check if a chat already exist
    const chat = await chatModel.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (chat) return res.status(200).json(chat);

    const newChat = new chatModel({
      members: [senderId, receiverId],
    });

    const response = await newChat.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

// FIND THE CHAT OF THE CURRENT LOGGED IN USER
const userChats = async (req, res) => {
  const userId = req.params.userId;

  try {
    const chats = await chatModel.find({
      members: { $in: [userId] },
    });

    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findChat = async (req, res) => {
  const firstId = req.params.firstId;
  const secondId = req.params.secondId;

  try {
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });

    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createChat, userChats, findChat };
