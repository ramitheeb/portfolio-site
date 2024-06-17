import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">rtheeb</h1>
      <p className="mb-4">
        Software engineer{" "}
        <a target="_blank" href="https://www.intunedhq.com">
          @intuned
        </a>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
