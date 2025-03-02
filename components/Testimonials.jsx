import { AnimatedTestimonials } from "./ui/animated-testimonials";
import img2 from "../public/harshit.jpeg";
import img4 from "../public/anant.jpg";
import img3 from "../public/abhinav.jpg";
import img1 from "../public/vedansh.jpg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Vedansh Gupta",
      src: img1,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Harshit Varshney",
      src: img2,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Abhinav Shrivastva",
      src: img3,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Anant Jain",
      src: img4,
    },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Ishika Jain",
    //   src: img5,
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Vansh Gupta",
    //   src: img6,
    // },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}




