import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/home/Hero";
import { CategoryPills } from "@/components/common/CategoryPills";
import { CourseCard } from "@/components/common/CourseCard";
import { useInView } from "@/hooks/use-in-view";
import { baseCourses } from "@/data/courses";

const Index = () => {
  const { ref: r1, inView: v1 } = useInView<HTMLDivElement>();
  const { ref: r2, inView: v2 } = useInView<HTMLDivElement>();

  return (
    <div>
      <Helmet>
        <title>GrowFast | Learn, Grow, and Accelerate Your Future</title>
        <meta name="description" content="GrowFast e-learning platform. World-class courses in AI, Data Science, Python, and more." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/'} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'GrowFast',
          url: typeof window !== 'undefined' ? window.location.origin : 'https://growfast.example',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${typeof window !== 'undefined' ? window.location.origin : 'https://growfast.example'}/explore?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        })}</script>
      </Helmet>

      <Hero />

      <section className="max-w-7xl mx-auto px-4">
        <div className="mt-10">
          <h2 className="h2">Popular Categories</h2>
          <CategoryPills />
        </div>

        <div ref={r1} className={`mt-16 ${v1 ? 'animate-reveal' : 'opacity-0 translate-y-2'}`}>
          <h2 className="h2">Learn From The Best</h2>
          <p className="subtle mt-2">Curated courses from industry-leading instructors.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {baseCourses.slice(0, 6).map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>

        <div ref={r2} className={`mt-20 ${v2 ? 'animate-reveal' : 'opacity-0 translate-y-2'}`}>
          <h2 className="h2">Your Growth Journey Starts Here</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[{
              label: 'Learners', value: 12000000
            },{
              label: 'Courses', value: 4500
            },{
              label: 'Instructors', value: 1200
            }].map(({label, value}) => (
              <StatCard key={label} label={label} value={value} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

function StatCard({ label, value }: { label: string; value: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="glass rounded-xl p-6">
      <div className="text-3xl font-semibold">{inView ? formatNumber(value) : '0'}</div>
      <div className="subtle mt-1">{label}</div>
    </div>
  );
}

function formatNumber(n: number) {
  if (n >= 1_000_000) return `${(n/1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n/1_000).toFixed(1)}k+`;
  return n.toString();
}

export default Index;
