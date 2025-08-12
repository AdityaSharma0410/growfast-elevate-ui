import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import ai from "@/assets/thumb-ai.jpg";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Helmet>
        <title>About GrowFast | Our Mission & Journey</title>
        <meta name="description" content="Discover GrowFast's mission to empower learners worldwide. Learn about our journey and community." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : '/about'} />
      </Helmet>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="h2">Empowering Millions to Learn Faster</h1>
          <p className="mt-3 text-muted-foreground">GrowFast connects learners with top instructors, delivering premium, practical courses that accelerate careers.</p>
          <div className="mt-6 flex gap-3">
            <Button variant="hero" className="rounded-full">Explore Courses</Button>
            <Button variant="premium" className="rounded-full">Become an Instructor</Button>
          </div>
        </div>
        <div className="relative">
          <img src={ai} alt="GrowFast mission imagery" className="rounded-2xl shadow-glow" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="h3 mb-6">Our Journey</h2>
        <ol className="relative border-s border-border ps-6 space-y-8">
          {["Founded with a bold vision","Reached 1M learners","Expanded to 4,500+ courses","Built a thriving instructor community"].map((m, i) => (
            <li key={i} className="glass rounded-xl p-4">
              <div className="absolute -start-3.5 mt-2 h-3 w-3 rounded-full bg-primary" />
              <div className="font-medium">{m}</div>
              <div className="subtle">Milestone {i+1}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="h3 mb-6">What Learners Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="glass rounded-2xl p-5">
              <p className="text-sm">“GrowFast helped me switch careers into data science. The courses are top-notch!”</p>
              <div className="subtle mt-3">— Happy Learner</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
