import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
import { formattedDate } from "@/utils/date";
import { imagePath } from "@/utils/image";

export default function PostItem({ title, image, excerpt, date, slug }) {
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath(slug, image)}
            width={300}
            height={200}
            alt={title}
          />
        </div>

        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate(date)}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
