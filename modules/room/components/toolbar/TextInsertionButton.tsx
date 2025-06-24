import { FaRegKeyboard } from "react-icons/fa";

interface Props {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D | undefined;
  elementsRef: React.MutableRefObject<any[]>;
}

const TextInsertionButton: React.FC<Props> = ({
  canvasRef,
  ctx,
  elementsRef,
}) => {
  const handleInsertText = () => {
    const text = prompt("Enter the text to insert:");
    if (!text || !canvasRef.current || !ctx) return;

    // Prompt for text color with default white
    let color = prompt("Enter text color (name or hex):", "white") || "white";

    // Optional: Validate basic hex color or fallback to white
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(color) && !/^[a-z]+$/i.test(color)) {
      // Not a valid hex or color name, fallback to white
      color = "white";
    }

    const x = parseInt(prompt("Enter X position:", "50") || "50", 10);
    const y = parseInt(prompt("Enter Y position:", "50") || "50", 10);

    ctx.font = "20px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);

    elementsRef.current.push({
      type: "text",
      text,
      x,
      y,
      font: ctx.font,
      color,
    });
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
