import { FaRedo, FaUndo } from "react-icons/fa";

import { useMyMoves } from "@/common/recoil/room";
import { useSavedMoves } from "@/common/recoil/savedMoves";

import { useRefs } from "../../hooks/useRefs";

const HistoryBtns = () => {
  const { redoRef, undoRef } = useRefs();

  const { myMoves } = useMyMoves();
  const savedMoves = useSavedMoves();

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Undo */}
      <div className="flex flex-col items-center gap-1">
        <button
          className="btn-icon text-xl"
          ref={undoRef}
          disabled={!myMoves.length}
          title="Undo"
        >
          <FaUndo />
        </button>
        <span className="text-xs text-white font-medium">Undo</span>
      </div>

      {/* Redo */}
      <div className="flex flex-col items-center gap-1">
        <button
          className="btn-icon text-xl"
          ref={redoRef}
          disabled={!savedMoves.length}
          title="Redo"
        >
          <FaRedo />
        </button>
        <span className="text-xs text-white font-medium">Redo</span>
      </div>
    </div>
  );
};

export default HistoryBtns;
