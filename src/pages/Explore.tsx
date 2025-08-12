import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiltersSidebar, Filters } from "@/components/explore/FiltersSidebar";
import { CourseCard } from "@/components/common/CourseCard";
import { generateCourses, baseCourses, CourseData } from "@/data/courses";
import { Skeleton } from "@/components/ui/skeleton";

export default function Explore() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<CourseData[]>([...generateCourses(0)]);
  const [filters, setFilters] = useState<Filters>({ categories: [], minRating: 0, maxPrice: 200, levels: [] });
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !loading) {
        setLoading(true);
        setTimeout(() => {
          setItems((prev) => [...prev, ...generateCourses(page)]);
          setPage((p) => p + 1);
          setLoading(false);
        }, 600);
      }
    }, { rootMargin: '600px' });
    io.observe(el);
    return () => io.disconnect();
  }, [page, loading]);

  const visible = useMemo(() => {
    return items.filter((c) => {
      const priceNum = Number(c.price.replace(/[^0-9.]/g, ''));
      return (
        (filters.categories.length === 0 || filters.categories.includes(c.category)) &&
        c.rating >= filters.minRating &&
        priceNum <= filters.maxPrice &&
        (filters.levels.length === 0 || filters.levels.includes(c.level))
      );
    });
  }, [items, filters]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Helmet>
        <title>Explore Courses | GrowFast</title>
        <meta name="description" content="Explore GrowFast courses. Filter by category, price, rating, and difficulty." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/explore'} />
      </Helmet>

      <h1 className="h2">Explore</h1>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 order-last lg:order-first">
          <FiltersSidebar value={filters} onChange={setFilters} />
        </div>
        <div className="lg:col-span-9">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
            {loading && Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <Skeleton className="h-44 w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/5" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-2/5" />
                </div>
              </div>
            ))}
          </div>
          <div ref={sentinelRef} className="h-6" />
        </div>
      </div>
    </div>
  );
}
