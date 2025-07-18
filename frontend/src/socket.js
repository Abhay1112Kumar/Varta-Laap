// 📁 src/socket.js
import { io } from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT, { transports: ["websocket"] });
export default socket;