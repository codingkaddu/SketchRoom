// common/lib/socketEvents.ts

// Events sent from server to client
export interface ServerToClientEvents {
  created: (roomId: string) => void;
  joined: (data: {
    roomId: string;
    failed?: boolean;
    wrongPassword?: boolean;
  }) => void;
  room_exists: (exists: boolean) => void;
  // Add other server-to-client events here as needed
}

// Events sent from client to server
export interface ClientToServerEvents {
  create_room: (username: string, password: string | null) => void;
  join_room: (roomId: string, username: string, password: string | null) => void;
  leave_room: () => void;
  // Add other client-to-server events here as needed
}
