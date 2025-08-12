import ai from "@/assets/thumb-ai.jpg";
import ds from "@/assets/thumb-data-science.jpg";
import py from "@/assets/thumb-python.jpg";
import ml from "@/assets/thumb-ml.jpg";
import dl from "@/assets/thumb-dl.jpg";
import chatgpt from "@/assets/thumb-chatgpt.jpg";

export type CourseData = {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  learners: string;
  price: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
};

export const baseCourses: CourseData[] = [
  { id: '1', title: 'Mastering ChatGPT Prompt Engineering', instructor: 'Dr. Nova Lee', rating: 4.7, learners: '1.2M', price: '$19.99', category: 'ChatGPT', level: 'Intermediate', thumbnail: chatgpt },
  { id: '2', title: 'Data Science Bootcamp 2025', instructor: 'Ava Kim', rating: 4.8, learners: '2.4M', price: '$24.99', category: 'Data Science', level: 'Beginner', thumbnail: ds },
  { id: '3', title: 'Complete Python Developer', instructor: 'Liam Chen', rating: 4.6, learners: '3.8M', price: '$14.99', category: 'Python', level: 'Beginner', thumbnail: py },
  { id: '4', title: 'Machine Learning A–Z', instructor: 'Iris Patel', rating: 4.7, learners: '1.9M', price: '$21.99', category: 'Machine Learning', level: 'Intermediate', thumbnail: ml },
  { id: '5', title: 'Deep Learning with PyTorch', instructor: 'Ethan Park', rating: 4.5, learners: '860k', price: '$18.99', category: 'Deep Learning', level: 'Advanced', thumbnail: dl },
  { id: '6', title: 'AI Foundations: From Zero to Hero', instructor: 'Sophia Rivers', rating: 4.8, learners: '1.1M', price: '$22.99', category: 'AI', level: 'Beginner', thumbnail: ai },
];

export function generateCourses(page: number): CourseData[] {
  // mock infinite list by reusing and mapping ids
  return baseCourses.map((c, idx) => ({
    ...c,
    id: `${page}-${idx}-${c.id}`,
    price: c.price,
  }));
}
