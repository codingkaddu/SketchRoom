import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { socket } from "@/common/lib/socket";
import { useModal } from "@/common/recoil/modal";
import { useSetRoomId } from "@/common/recoil/room";
import NotFoundModal from "@/modules/home/modals/NotFound";

const NameInput = () => {
  const setRoomId = useSetRoomId();
  const { openModal } = useModal();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [roomIsPrivate, setRoomIsPrivate] = useState(false); // Does the room require password?

  const router = useRouter();
  const roomId = (router.query.roomId || "").toString();

  useEffect(() => {
    if (!roomId) return;

    // Check if room exists and if it is private
    socket.emit("check_room", roomId);

    socket.on("room_exists", (exists) => {
      if (!exists) {
        router.push("/");
      } else {
        // Ask server if this room is private
        socket.emit("is_room_private", roomId);
      }
    });

    socket.on("room_private_status", (isPrivateStatus: boolean) => {
      setRoomIsPrivate(isPrivateStatus);
    });

    return () => {
      socket.off("room_exists");
      socket.off("room_private_status");
    };
  }, [roomId, router]);

  useEffect(() => {
    const handleJoined = (data: { roomId: string; failed?: boolean; wrongPassword?: boolean }) => {
      const { roomId: rId, failed, wrongPassword } = data;
      if (wrongPassword) {
        openModal(
          <NotFoundModal
            id={rId}
            message="Incorrect password. Please try again."
          />
        );
      } else if (failed) {
        openModal(<NotFoundModal id={rId} />);
      } else {
        setRoomId(rId);
      }
    };

    socket.on("joined", handleJoined);

    return () => {
      socket.off("joined", handleJoined);
    };
  }, [openModal, setRoomId]);

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If room is private, password must be entered
    if (roomIsPrivate && !password.trim()) {
      openModal(
        <NotFoundModal
          id={roomId}
          message="This room requires a password. Please enter the password."
        />
      );
      return;
    }

    socket.emit("join_room", roomId, name, roomIsPrivate ? password : null);
  };

  return (
    <form className="my-24 flex flex-col items-center" onSubmit={handleJoinRoom}>
      <h1 className="text-5xl font-extrabold leading-tight sm:text-extra">Sketchroom</h1>
      <h3 className="text-xl sm:text-2xl mb-6">Collaborative drawing in real-time</h3>

      <div className="mt-10 mb-6 flex flex-col gap-2 w-full max-w-md">
        <label className="font-bold leading-tight">Enter your name</label>
        <input
          className="rounded-xl border p-5 py-1"
          id="username"
          placeholder="Username..."
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 15))}
          required
        />
      </div>

      {roomIsPrivate && (
        <div className="mb-6 flex flex-col items-center w-full max-w-md">
          <label
            htmlFor="room-password"
            className="block font-bold mb-1 text-center w-full"
          >
            Room Password
          </label>
          <input
            className="rounded-xl border p-3 w-full"
            type="password"
            id="room-password"
            placeholder="Enter room password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={roomIsPrivate}
          />
        </div>
      )}

      <button className="btn px-12 py-3" type="submit" disabled={!name.trim()}>
        Enter room
      </button>
    </form>
  );
};

export default NameInput;
