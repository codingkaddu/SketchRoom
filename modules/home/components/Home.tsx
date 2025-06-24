import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { socket } from "@/common/lib/socket";
import { useModal } from "@/common/recoil/modal";
import { useSetRoomId } from "@/common/recoil/room";

import NotFoundModal from "../modals/NotFound";

type JoinedRoomPayload = {
  roomId: string;
  failed?: boolean;
  wrongPassword?: boolean;
};

const Home = () => {
  const { openModal } = useModal();
  const setAtomRoomId = useSetRoomId();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  // Separate state for join section
  const [joinPassword, setJoinPassword] = useState("");
  const [joinIsPrivate, setJoinIsPrivate] = useState(false);

  // Separate state for create section
  const [createPassword, setCreatePassword] = useState("");
  const [createIsPrivate, setCreateIsPrivate] = useState(false);

  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = "#2c3e50";
  }, []);

  useEffect(() => {
    socket.on("created", (roomIdFromServer: string) => {
      setAtomRoomId(roomIdFromServer);
      router.push(`/${roomIdFromServer}`);
    });

    const handleJoinedRoom = (data: JoinedRoomPayload) => {
      const { roomId, failed, wrongPassword } = data;

      if (wrongPassword) {
        openModal(
          <NotFoundModal
            id={roomId}
            message="Incorrect password. Please try again."
          />
        );
      } else if (!failed) {
        setAtomRoomId(roomId);
        router.push(`/${roomId}`);
      } else {
        openModal(<NotFoundModal id={roomId} />);
      }
    };

    socket.on("joined", handleJoinedRoom);

    return () => {
      socket.off("created");
      socket.off("joined", handleJoinedRoom);
    };
  }, [openModal, router, setAtomRoomId]);

  useEffect(() => {
    socket.emit("leave_room");
    setAtomRoomId("");
  }, [setAtomRoomId]);

  const handleCreateRoom = () => {
    socket.emit("create_room", username, createIsPrivate ? createPassword : null);
  };

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!roomId) return;

    socket.emit("join_room", roomId, username, joinIsPrivate ? joinPassword : null);
  };

  return (
    <div className="flex flex-col items-center pt-12 pb-24 max-w-md mx-auto w-full px-4">
      <h1
        className="text-5xl font-extrabold leading-tight sm:text-extra text-center"
        style={{ color: "#ecf0f1" }}
      >
        SketchRoom by Akhil
      </h1>
      <h3
        className="text-xl sm:text-2xl mb-10 text-center"
        style={{ color: "#bdc3c7" }}
      >
        Collaborative drawing in real-time
      </h3>

      <div className="mb-8 w-full">
        <label
          className="block mb-2 font-extrabold text-lg"
          style={{ color: "#ecf0f1" }}
        >
          Who’s wielding the brush?
        </label>
        <input
          className="input w-full"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value.slice(0, 15))}
          required
        />
      </div>

      <div className="my-4 h-px w-full bg-zinc-200" />

      {/* Join Section */}
      <form className="w-full" onSubmit={handleJoinRoom}>
        <label
          htmlFor="room-id"
          className="block mb-2 font-bold text-base"
          style={{ color: "#ecf0f1" }}
        >
          Enter your session code
        </label>
        <input
          className="input w-full mb-4"
          id="room-id"
          placeholder="Room id..."
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          required
        />

        <div className="flex items-center mb-4 space-x-2">
          <label className="flex items-center space-x-1 text-white">
            <input
              type="checkbox"
              checked={joinIsPrivate}
              onChange={() => setJoinIsPrivate((prev) => !prev)}
            />
            <span>Private Room (password required)</span>
          </label>
        </div>

        {joinIsPrivate && (
          <input
            className="input w-full mb-4"
            type="password"
            placeholder="Enter room password"
            value={joinPassword}
            onChange={(e) => setJoinPassword(e.target.value)}
            required
          />
        )}

        <button className="btn w-full" type="submit">
          Join Session
        </button>
      </form>

      <div className="my-8 flex w-full items-center gap-2">
        <div className="h-px flex-grow bg-zinc-200" />
        <p className="text-zinc-400">or</p>
        <div className="h-px flex-grow bg-zinc-200" />
      </div>

      {/* Create Section */}
      <div className="w-full">
        <label
          className="block mb-2 font-bold text-base"
          style={{ color: "#ecf0f1" }}
        >
          Start a new session
        </label>

        <div className="mb-4 flex items-center space-x-2">
          <label className="flex items-center space-x-1 text-white">
            <input
              type="checkbox"
              checked={createIsPrivate}
              onChange={() => setCreateIsPrivate((prev) => !prev)}
            />
            <span>Private Room (password required)</span>
          </label>
        </div>

        {createIsPrivate && (
          <input
            className="input w-full mb-4"
            type="password"
            placeholder="Set a password for your room"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            required
          />
        )}

        <button className="btn w-full" onClick={handleCreateRoom}>
          Create Session
        </button>
      </div>

      <p className="mt-16 text-sm text-center" style={{ color: "#95a5a6" }}>
        Made with ❤️ by Akhil Jaiswal
      </p>
    </div>
  );
};

export default Home;
