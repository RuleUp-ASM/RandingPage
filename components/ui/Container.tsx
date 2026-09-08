/**
 * The 1440px artboard uses a 120px side gutter, leaving a 1200px content
 * column — reproduced exactly at xl. Narrower viewports keep the column and
 * shrink the gutter instead.
 */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-[120px] ${className}`}
    >
      {children}
    </div>
  );
}
