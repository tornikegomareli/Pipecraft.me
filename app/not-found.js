import { sans } from "./fonts";
import Link from "./Link";
import "./[slug]/markdown.css";

export default function NotFound() {
  return (
    <article className="markdown">
      <h1
        className={[
          sans.className,
          "text-[40px] font-black leading-[44px] text-[--title]",
        ].join(" ")}
      >
        Not found
      </h1>
      <div className="markdown mt-10">
        <p>This page doesn't exist (yet?)</p>
        <p>
          If something is broke. Please{" "}
          <Link href="https://github.com/tornikegomareli/Pipecraft.me/issues">
            complain here.
          </Link>
        </p>
        <p></p>
        <p>Hope you'll find what you're looking for.</p>
      </div>
    </article>
  );
}
