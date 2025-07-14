
import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
const ChatContext = createContext();

// Provider component
const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState([]);

  // Keep user in sync with localStorage
  useEffect(() => {
    const loadUser = () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
    };

    // Load initially
    loadUser();

    // Update user if localStorage changes
    const handleStorageChange = () => {
      loadUser();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook for easy access
export const ChatState = () => useContext(ChatContext);

export default ChatProvider;

// import React, { createContext, useContext, useEffect, useState } from "react";

// const ChatContext = createContext();

// const ChatProvider = ({ children }) => {
//   const [selectedChat, setSelectedChat] = useState();
//   const [user, setUser] = useState();
//   const [notification, setNotification] = useState([]);
//   const [chats, setChats] = useState([]);

//   useEffect(() => {
//     const loadUser = () => {
//       const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//       setUser(userInfo);
//     };

//     loadUser();

//     const handleStorageChange = () => loadUser();
//     window.addEventListener("storage", handleStorageChange);

//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   return (
//     <ChatContext.Provider
//       value={{
//         selectedChat,
//         setSelectedChat,
//         user,
//         setUser,
//         notification,
//         setNotification,
//         chats,
//         setChats,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const ChatState = () => useContext(ChatContext);

// export default ChatProvider;
