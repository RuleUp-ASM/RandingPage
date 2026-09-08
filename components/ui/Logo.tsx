/**
 * "룰업" wordmark. The gradient mark is a rounded square whose height is
 * driven by the R glyph, so only the width is fixed — same as in Figma.
 */
export function Logo({
  markSize = 32,
  markRadius = 10,
  glyphSize = 17,
  wordSize = 20,
  wordClassName = "text-ink",
}: {
  markSize?: number;
  markRadius?: number;
  glyphSize?: number;
  wordSize?: number;
  wordClassName?: string;
}) {
  return (
    <span className="flex items-center gap-[10px]">
      <span
        className="flex flex-col items-center justify-center font-black text-white"
        style={{
          width: markSize,
          borderRadius: markRadius,
          fontSize: glyphSize,
          lineHeight: 1,
          backgroundImage:
            "linear-gradient(152deg, #6b5ce8 0%, #9e73fa 71.429%)",
        }}
      >
        R
      </span>
      <span
        className={`font-black tracking-[-0.02em] ${wordClassName}`}
        style={{ fontSize: wordSize, lineHeight: 1 }}
      >
        룰업
      </span>
    </span>
  );
}
