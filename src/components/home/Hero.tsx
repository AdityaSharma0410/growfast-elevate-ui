import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden rounded-b-2xl">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster=""
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="h1 animate-reveal">Learn, Grow, and Accelerate Your Future</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground animate-fade-in">
            World-class courses from top instructors at your fingertips.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button variant="hero" size="lg" className="rounded-full">Get Started</Button>
            <Button variant="premium" size="lg" className="rounded-full">Browse Courses</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
