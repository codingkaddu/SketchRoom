import { MdClear } from "react-icons/md";

interface Props {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  ctxRef: React.RefObject<CanvasRenderingContext2D | null>;
  elementsRef: React.MutableRefObject<any[]>;
}

const ClearCanvasButton: React.FC<Props> = ({ canvasRef, ctxRef, elementsRef }) => {
  const handleClear = () => {
    if (!canvasRef.current || !ctxRef.current) return;

    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    elementsRef.current = []; // clear shapes or moves
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        className="btn-icon text-2xl"
        onClick={handleClear}
        title="Clear Canvas"
      >
        <MdClear />
      </button>
      <span className="text-xs font-medium">Clear</span>
    </div>
  );
};

export default ClearCanvasButton;
