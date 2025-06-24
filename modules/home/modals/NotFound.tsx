import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "@/common/recoil/modal";

interface NotFoundModalProps {
  id: string;
  message?: string;   // optional message prop
}

const NotFoundModal = ({ id, message }: NotFoundModalProps) => {
  const { closeModal } = useModal();

  return (
    <div className="relative flex flex-col items-center rounded-md bg-white p-10 ">
      <button onClick={closeModal} className="absolute top-5 right-5">
        <AiOutlineClose />
      </button>
      <h2 className="text-lg font-bold">
       Incorrect password entered for room with id &quot;{id}&quot; 
      </h2>
      <h3>{message ?? "Try to join room later."}</h3>
    </div>
  );
};

export default NotFoundModal;
