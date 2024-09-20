import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero-image.avif"
          width={300}
          height={300}
          alt="An image showing the author"
        />
      </div>
      <h1>Hi, I&apos;m Richard- A Web Developer and Tech Enthusiast</h1>
      <p>
        I am currently honing my skills in modern web development technologies,
        focusing on Next.js. I&apos;ve been working with Pages Router,
        Server-Side Rendering (SSR), and building dynamic web applications. My
        aim is to develop fast, SEO-friendly, and scalable solutions using these
        advanced frameworks.
      </p>
    </section>
  );
}
