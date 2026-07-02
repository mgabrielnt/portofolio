type DotLabelProps = {
  children: React.ReactNode;
};

export function DotLabel({ children }: DotLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-2 text-[13px] font-bold uppercase">
      <span className="size-2 rounded-full bg-accent" />
      <span>{children}</span>
    </div>
  );
}
