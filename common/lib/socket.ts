import { io, Socket } from "socket.io-client";
import type { ServerToClientEvents, ClientToServerEvents } from "./socketEvents";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
