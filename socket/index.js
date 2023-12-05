import { Server } from "socket.io";

// INITIALIZING SOCKET.IO SERVER WITH CORS CONFIGURATION
const io = new Server({
  cors: {
    origin: "*",
  },
});

// ARRAY TO STORE ONLINE USERS
let onlineUsers = [];

// LISTENING FOR THE CURRENT LOGEED IN USER CONNECTION
io.on("connection", (socket) => {
  // HANDLING NEW USER ADDITION
  socket.on("addNewUser", (userId) => {
    // CHECK IF USER IS ALREADY ONLINE
    !onlineUsers.some((user) => user.userId === userId) &&
      // ADD NEW USER TO ONLINE USERS ARRAY
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });

    console.log("Connected Users:", onlineUsers);

    // BROADCASTING ONLINE USERS TO ALL CONNECTED CLIENTS
    io.emit("getOnlineUsers", onlineUsers);
  });

  // HANDLING INCOMING MESSAGES
  socket.on("sendMessage", (message) => {
    // FIND RECIPIENT IN ONLINE USERS
    const user = onlineUsers.find(
      (user) => user.userId === message.recipientId
    );

    if (user) {
      // SEND MESSAGE TO RECIPIENT USER
      io.to(user.socketId).emit("getMessage", message);
    }
  });

  // HANDLING USER DISCONNECTION
  socket.on("disconnect", () => {
    // REMOVE DISCONNECTED USER FROM ONLINE USERS ARRAY (so we can remove the gren dot next to the icon)
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    console.log("User Disconnected:", onlineUsers);

    // BROADCASTING THE NEW ONLINE USERS LIST TO ALL CONNECTED CLIENTS
    io.emit("getOnlineUsers", onlineUsers);
  });
});

// STARTING SOCKET.IO SERVER ON PORT 3000
io.listen(3000);
