import { CgScreen } from "react-icons/cg";
import { useModal } from "@/common/recoil/modal";
import BackgroundModal from "../../modals/BackgroundModal";

const BackgroundPicker = () => {
  const { openModal } = useModal();

  return (
    <button
      className="btn-icon"
      onClick={() => {
        console.log("BackgroundPicker clicked");  // <-- Add this log
        openModal(<BackgroundModal />);
      }}
    >
      <CgScreen />
    </button>
  );
};

export default BackgroundPicker;
