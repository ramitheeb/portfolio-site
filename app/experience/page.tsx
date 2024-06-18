import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Experience",
  description: "Work experience and Projects I have worked on.",
};

function Tag({ text }: { text: string }) {
  return (
    <span className="text-sm text-white rounded-md p-1 border-1 border-slate-500">
      {text}
    </span>
  );
}

const roles = [
  {
    title: "Full Stack Software Engineer",
    company: "Intuned",
    company_url: "https://www.intunedhq.com",
    period: "Sep 2022 - Present",
    description:
      "I contribute to building intuned's platform, we're building a browser automation platform for developers and product teams. i contribute to different parts of the platform, including the frontend, backend, LLMs applications, and Intuned's SDK.",
    tags: [
      "Typescript",
      "Temporal",
      "NextJs",
      "Redux",
      "Tailwind",
      "GraphQL",
      "Postgres",
      "Playwright",
      "Docker",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Restaurant365",
    company_url: "https://www.restaurant365.com/",
    period: "Jan 2021 - Sep 2022",
    description:
      "worked in a cross-functional team to build an maintain frontend features for the company's platform.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "MUI",
      "Redux",
      "Redux-saga",
      "Jest",
      "React Testing Library",
      "Storybook",
    ],
  },
] as const;

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My work experience and Projects I have worked on.
      </h1>
      <section>
        <h2 className="font-semibold text-xl mb-4 tracking-tighter">
          Work Experience
        </h2>

        <ul>
          {roles.map((role) => (
            <li className="list-disc mb-8">
              <h3>
                <span className="font-semibold">{role.period}</span>:{" "}
                {role.title} at{" "}
                <a
                  target="_blank"
                  href={role.company_url}
                  className="text-blue-500"
                >
                  {role.company}
                </a>
                :
              </h3>{" "}
              <div className="text-slate-300 text-sm">
                <p>{role.description}</p>
              </div>
              <div className="mt-4 flex gap-1 flex-wrap">
                {role.tags.map((tag) => (
                  <Tag text={tag} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h3 className="font-semibold text-xl mb-4 tracking-tighter">
          Projects
        </h3>

        <ul>
          <li>
            <a
              target="_blank"
              href="https://guruhub.io"
              className="text-blue-500"
            >
              GuruHub
            </a>
            : A platform for developers share their learning roadmpas with
            others.
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.tarkeez.space/"
              className="text-blue-500"
            >
              Tarkeez
            </a>
            : A pomodoro timer to help you focus on your work. "tarkeez" means
            focus in arabic
          </li>
        </ul>
      </section>
    </section>
  );
}
