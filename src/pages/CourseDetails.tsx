import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { baseCourses } from "@/data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = useMemo(() => baseCourses[0], []); // mock select

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Helmet>
        <title>{course.title} | GrowFast</title>
        <meta name="description" content={`${course.title} by ${course.instructor}. Enroll now on GrowFast.`} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : `/course/${id}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: course.title,
          description: `${course.title} by ${course.instructor}`,
          provider: { '@type': 'Organization', name: 'GrowFast' },
          aggregateRating: { '@type': 'AggregateRating', ratingValue: course.rating, reviewCount: 1200 }
        })}</script>
      </Helmet>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="rounded-2xl overflow-hidden glass">
            <div className="aspect-video">
              <video className="h-full w-full object-cover" controls poster={course.thumbnail}>
                <source src="/media/hero.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-4">
              <h1 className="h2">{course.title}</h1>
              <div className="subtle mt-1">By {course.instructor} • {course.learners}+ learners</div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mt-6">
            <TabsList className="glass">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 glass rounded-xl p-4">
              <p className="text-sm text-muted-foreground">This course covers fundamentals through advanced topics with real projects.</p>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-4 glass rounded-xl p-4">
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Introduction and setup</li>
                <li>• Core concepts explained</li>
                <li>• Hands-on labs and projects</li>
                <li>• Final capstone</li>
              </ul>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4 glass rounded-xl p-4">
              <p className="text-sm text-muted-foreground">“Excellent course with practical insights.” — A happy learner</p>
            </TabsContent>
            <TabsContent value="instructor" className="mt-4 glass rounded-xl p-4">
              <p className="text-sm text-muted-foreground">{course.instructor} is an industry expert with years of experience.</p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-24 glass rounded-xl p-6">
            <div className="text-3xl font-semibold">{course.price}</div>
            <div className="subtle">One-time purchase • Lifetime access</div>
            <Button variant="hero" className="w-full rounded-full mt-4">Enroll Now</Button>
            <Button variant="premium" className="w-full rounded-full mt-2">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
