import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
import { formattedDate } from "@/utils/date";
import { imagePath } from "@/utils/image";
import { linkPath } from "@/utils/link";

export default function PostItem({
  title,
  image,
  excerpt,
  date,
  slug,
  author,
}) {
  return (
    <li className={classes.post}>
      <Link href={linkPath(slug)}>
        <div className={classes.image}>
          <Image
            src={imagePath(slug, image)}
            width={300}
            height={200}
            alt={title}
            layout="responsive"
          />
        </div>

        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate(date)}</time>
          <p>{excerpt}</p>
          <p>By- {author}</p>
        </div>
      </Link>
    </li>
  );
}
