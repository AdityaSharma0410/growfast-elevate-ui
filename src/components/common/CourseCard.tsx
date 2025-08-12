import { useTilt } from "@/hooks/use-tilt";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export type Course = {
  id: string;
  title: string;
  instructor: string;
  rating: number; // 0-5
  learners: string;
  price: string;
  thumbnail: string;
};

export function CourseCard({ course }: { course: Course }) {
  const { ref, style, onMouseLeave, onMouseMove } = useTilt(10);

  const stars = Array.from({ length: 5 }).map((_, i) => {
    const filled = i < Math.round(course.rating);
    return (
      <Star
        key={i}
        className={filled ? "text-accent" : "text-muted-foreground"}
        fill={filled ? "currentColor" : "none"}
        strokeWidth={1.5}
      />
    );
  });

  return (
    <Link to={`/course/${course.id}`} aria-label={course.title}>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={style}
        className="group relative rounded-2xl glass overflow-hidden shadow-elevated hover:shadow-glow transition-shadow"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img src={course.thumbnail} alt={`${course.title} course thumbnail`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </div>
        <div className="p-4">
          <div className="text-sm text-muted-foreground">{course.instructor}</div>
          <div className="mt-1 font-medium line-clamp-2 min-h-[3rem]">{course.title}</div>
          <div className="mt-2 flex items-center gap-1">{stars}</div>
          <div className="mt-1 text-xs subtle">{course.learners} learners</div>
          <div className="mt-3 font-semibold">{course.price}</div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{boxShadow: 'inset 0 0 0 1px hsl(var(--primary) / 0.25), inset 0 0 60px hsl(var(--primary) / 0.06)'}} />
      </div>
    </Link>
  );
}
