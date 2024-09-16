import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
import { formattedDate } from "@/utils/date";

export default function PostItem({ title, image, excerpt, date, slug }) {
  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image src="" width="" height="" alt="" />
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
