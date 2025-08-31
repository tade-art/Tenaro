export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[var(--color-accent)]"></div>
    </div>
  );
}