import { FaRegKeyboard } from "react-icons/fa";

interface Props {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  ctxRef: React.RefObject<CanvasRenderingContext2D | null>;
}

const TextInsertionButton: React.FC<Props> = ({ canvasRef, ctxRef }) => {
  const handleInsertText = () => {
    const text = prompt("Enter the text to insert:");
    if (!text || !canvasRef.current || !ctxRef.current) return;

    const x = parseInt(prompt("Enter X position:", "50") || "50", 10);
    const y = parseInt(prompt("Enter Y position:", "50") || "50", 10);

    ctxRef.current.font = "20px Arial";
    ctxRef.current.fillStyle = "white";
    ctxRef.current.fillText(text, x, y);
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        className="btn-icon text-2xl"
        onClick={handleInsertText}
        title="Insert Text"
      >
        <FaRegKeyboard />
      </button>
      <span className="text-xs font-medium">Text</span>
    </div>
  );
};

export default TextInsertionButton;
