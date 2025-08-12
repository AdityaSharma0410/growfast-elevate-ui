import { useCallback } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "ChatGPT", meta: "4M+ learners" },
  { name: "Data Science", meta: "8M+ learners" },
  { name: "Python", meta: "48.8M+ learners" },
  { name: "Machine Learning", meta: "9M+ learners" },
  { name: "Deep Learning", meta: "2M+ learners" },
  { name: "Artificial Intelligence", meta: "AI-based courses" },
];

export function CategoryPills() {
  const onMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--x', x + '%');
    e.currentTarget.style.setProperty('--y', y + '%');
  }, []);

  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {categories.map((c) => (
        <Button
          key={c.name}
          variant="premium"
          className="ripple-hover rounded-full justify-start px-4 py-6 h-auto"
          onMouseMove={onMove}
        >
          <div>
            <div className="text-sm font-medium">{c.name}</div>
            <div className="subtle text-xs">{c.meta}</div>
          </div>
        </Button>
      ))}
    </div>
  );
}
