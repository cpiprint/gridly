type GridlyLogoProps = {
  size?: number | string;
  className?: string;
};

/**
 * Gridly Logo — 4×4 grid with the signature checkerboard pattern.
 * Active cells: [0, 3, 5, 6, 9, 10, 12, 15]
 *
 * Grid layout (● = active, ○ = inactive):
 *   ●  ○  ○  ●
 *   ○  ●  ●  ○
 *   ○  ●  ●  ○
 *   ●  ○  ○  ●
 */
const activeCells = new Set([0, 3, 5, 6, 9, 10, 12, 15]);

const GridlyLogo = ({ size = 24, className }: GridlyLogoProps) => {
  const cells = Array.from({ length: 16 }, (_, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const isActive = activeCells.has(i);
    return { col, row, isActive };
  });

  // Each cell is 6×6 with 2px gap → total = 4*6 + 3*2 = 30
  const cellSize = 6;
  const gap = 2;
  const viewBoxSize = cellSize * 4 + gap * 3;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Gridly Logo"
    >
      {cells.map(({ col, row, isActive }, i) => (
        <rect
          key={i}
          x={col * (cellSize + gap)}
          y={row * (cellSize + gap)}
          width={cellSize}
          height={cellSize}
          rx={0.5}
          fill={isActive ? "currentColor" : "currentColor"}
          opacity={isActive ? 0.85 : 0.15}
        />
      ))}
    </svg>
  );
};

export default GridlyLogo;
