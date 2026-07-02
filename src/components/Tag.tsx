type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex rounded-[3px] bg-white/15 px-3 py-1 text-[11px] font-bold text-muted">
      {children}
    </span>
  );
}
