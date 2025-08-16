import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Developer, Full-Stack Engineer, Freelancer, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="developer illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Aditya Vyas, a passionate software developer
                specializing in creating efficient backend solutions and
                full-stack applications.{" "}
                <span className="font-bold text-white">
                  With expertise in Python frameworks like Flask, Django, and FastAPI,
                </span>
                , I'm dedicated to optimizing systems for performance and scalability.
              </p>
              <p className="text-white">
                My focus is on building robust APIs, database management, and interactive dashboards.
                From freelance projects in e-commerce and CRM systems to internships automating workflows,
                I'm expanding my skills in full-stack development to create seamless, impactful applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and problem-solver, driven by a passion for
                    technology that enhances efficiency and user experience. Through projects
                    like real-time sentiment analysis and synced video platforms, I aim to
                    innovate and contribute to the tech community with practical solutions.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Aditya Vyas, B.Tech in Computer Science
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white">Software Developer & Freelancer</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}