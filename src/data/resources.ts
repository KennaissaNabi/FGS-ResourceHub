export type Audience = "high-school" | "college-first-year" | "all";
export type Category =
  | "scholarship"
  | "community"
  | "internship"
  | "program"
  | "learning";

export type Resource = {
  id: string;
  name: string;
  description: string;
  url: string;
  audiences: Audience[];
  category: Category;
  tags: string[];
  /** Short note like "HS seniors" or "Freshmen & sophomores" */
  eligibility?: string;
};

export const audienceLabels: Record<Exclude<Audience, "all">, string> = {
  "high-school": "High School (Jr / Sr)",
  "college-first-year": "First Year in College",
};

export const categoryLabels: Record<Category, string> = {
  scholarship: "Scholarships",
  community: "Communities",
  internship: "Internships & Early Career",
  program: "Programs & Fellowships",
  learning: "Learning & Prep",
};

export const resources: Resource[] = [
  // ——— High school scholarships & programs ———
  {
    id: "amazon-future-engineer",
    name: "Amazon Future Engineer Scholarship",
    description:
      "Up to $40,000 for CS-related degrees plus a pathway to a paid summer internship at Amazon. Built for high school seniors with financial need.",
    url: "https://www.amazonfutureengineer.com/scholarships",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["tech", "CS", "internship pathway"],
    eligibility: "HS seniors · financial need · CS major planned",
  },
  {
    id: "linkedin-possibilities",
    name: "LinkedIn Possibilities in Tech Scholarship",
    description:
      "Up to $40,000 over four years plus community building, college navigation, and technical training for future software engineers.",
    url: "https://apply.mykaleidoscope.com/program/LinkedIn2026",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["tech", "software engineering", "mentorship"],
    eligibility: "HS seniors · CS / related major · U.S. or Puerto Rico",
  },
  {
    id: "uncf-stem",
    name: "UNCF STEM Scholars Program",
    description:
      "Up to $25,000 plus mentorship, internship support, and career coaching for high-achieving students entering STEM majors.",
    url: "https://uncf.org/programs/stem-scholars",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["STEM", "mentorship", "internship"],
    eligibility: "HS seniors · 3.0+ GPA · financial need",
  },
  {
    id: "questbridge",
    name: "QuestBridge National College Match",
    description:
      "Connects high-achieving, low-income students with full four-year scholarships to partner colleges. A cornerstone pathway for first-gen scholars.",
    url: "https://www.questbridge.org/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["first-gen", "full ride", "college access"],
    eligibility: "HS juniors & seniors · high-achieving · low-income",
  },
  {
    id: "gates-scholarship",
    name: "The Gates Scholarship",
    description:
      "Last-dollar scholarship covering the full cost of attendance for outstanding, Pell-eligible minority students.",
    url: "https://www.thegatesscholarship.org/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["full cost", "Pell-eligible", "leadership"],
    eligibility: "HS seniors · Pell-eligible · minority students",
  },
  {
    id: "coca-cola-scholars",
    name: "Coca-Cola Scholars Program",
    description:
      "Merit-based awards for high school seniors who lead in service, academics, and community impact. Open across majors.",
    url: "https://www.coca-colascholarsfoundation.org/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["merit", "leadership", "all majors"],
    eligibility: "HS seniors",
  },
  {
    id: "jack-kent-cooke",
    name: "Jack Kent Cooke College Scholarship",
    description:
      "Up to $55,000/year for high-achieving students with financial need, plus advising through college.",
    url: "https://www.jkcf.org/our-scholarships/college-scholarship-program/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["need-based", "advising", "high-achieving"],
    eligibility: "HS seniors · financial need · strong academics",
  },
  {
    id: "seneca-foundation",
    name: "Seneca Foundation Tech Scholars",
    description:
      "Paid technical training apprenticeship, MacBook, scholarship support, and a partner-company internship for students heading into CS degrees.",
    url: "https://www.senecafoundation.org/apply",
    audiences: ["high-school", "college-first-year"],
    category: "program",
    tags: ["tech", "paid training", "internship"],
    eligibility: "Recent HS grads · CS / software-related path",
  },
  {
    id: "possenetwork",
    name: "Posse Foundation",
    description:
      "Full-tuition leadership scholarships and a supportive cohort model at partner universities.",
    url: "https://www.possefoundation.org/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["full tuition", "cohort", "leadership"],
    eligibility: "HS seniors · nominated by partner orgs / schools",
  },

  // ——— College communities (Color Stack–style) ———
  {
    id: "colorstack",
    name: "ColorStack",
    description:
      "National community for Black and Latinx CS students: Slack support, Fam Fridays, career fairs, and partner company pipelines.",
    url: "https://www.colorstack.org/students",
    audiences: ["college-first-year"],
    category: "community",
    tags: ["CS", "career fair", "Slack"],
    eligibility: "Black & Latinx undergrad CS students",
  },
  {
    id: "codepath",
    name: "CodePath",
    description:
      "Free, engineer-taught courses (interview prep, web, AI) plus mentorship and employer pathways. Strong fit for first-year and early CS students.",
    url: "https://www.codepath.org/courses",
    audiences: ["college-first-year"],
    category: "learning",
    tags: ["interview prep", "web", "free courses"],
    eligibility: "Undergrads at partner campuses (and open courses)",
  },
  {
    id: "rewriting-the-code",
    name: "Rewriting the Code",
    description:
      "Community of 50,000+ women in tech from university through early career — mentorship, events, and company connections year-round.",
    url: "https://rewritingthecode.org/",
    audiences: ["college-first-year"],
    category: "community",
    tags: ["women in tech", "mentorship", "events"],
    eligibility: "Women in tech · university & early career",
  },
  {
    id: "break-through-tech",
    name: "Break Through Tech",
    description:
      "AI Program, Sprinternships™ (paid micro-internships during breaks), and a fellow community for undergrads breaking into tech.",
    url: "https://www.breakthroughtech.org/programs/",
    audiences: ["college-first-year"],
    category: "program",
    tags: ["AI", "Sprinternship", "early career"],
    eligibility: "Undergrads interested in tech / AI careers",
  },
  {
    id: "nsbe",
    name: "NSBE — National Society of Black Engineers",
    description:
      "Chapters, conferences, scholarships, and recruiting pipelines for Black engineers at every stage of college.",
    url: "https://www.nsbe.org/",
    audiences: ["college-first-year", "high-school"],
    category: "community",
    tags: ["engineering", "conference", "scholarships"],
    eligibility: "Black students in engineering & STEM",
  },
  {
    id: "shpe",
    name: "SHPE — Society of Hispanic Professional Engineers",
    description:
      "National network, career fairs, and scholarships supporting Hispanic students pursuing STEM degrees.",
    url: "https://www.shpe.org/",
    audiences: ["college-first-year", "high-school"],
    category: "community",
    tags: ["STEM", "career fair", "scholarships"],
    eligibility: "Hispanic students in STEM",
  },
  {
    id: "mlh",
    name: "Major League Hacking (MLH)",
    description:
      "Hackathons, fellowship programs, and community events where first-years can build projects and meet recruiters early.",
    url: "https://mlh.io/",
    audiences: ["college-first-year"],
    category: "community",
    tags: ["hackathons", "projects", "networking"],
    eligibility: "Students interested in building & hacking",
  },
  {
    id: "hack-diversity",
    name: "hack.diversity",
    description:
      "Fellowship connecting Black and Latinx aspiring technologists with Boston-area tech careers through training and placements.",
    url: "https://www.hackdiversity.com/",
    audiences: ["college-first-year"],
    category: "program",
    tags: ["fellowship", "placement", "Boston"],
    eligibility: "Black & Latinx students pursuing tech careers",
  },

  // ——— Internships aimed at early undergrads ———
  {
    id: "google-step",
    name: "Google STEP Internship",
    description:
      "First- and second-year focused software engineering internship with mentorship — one of the best early footholds in big tech.",
    url: "https://buildyourfuture.withgoogle.com/programs/step",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["software engineering", "freshman", "sophomore"],
    eligibility: "First- & second-year undergrads",
  },
  {
    id: "microsoft-explore",
    name: "Microsoft Explore",
    description:
      "12-week internship for first- and second-years combining product management and software engineering rotations.",
    url: "https://careers.microsoft.com/v2/global/en/exploration-programs/explore",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["SWE", "PM", "early career"],
    eligibility: "First- & second-year undergrads",
  },
  {
    id: "meta-university",
    name: "Meta University",
    description:
      "Paid summer program for first- and second-year students from underrepresented backgrounds to explore software engineering at Meta.",
    url: "https://www.metacareers.com/careerprograms/pathways/metauniversity",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["software engineering", "underrepresented"],
    eligibility: "First- & second-year undergrads",
  },
  {
    id: "amazon-sde-intern",
    name: "Amazon SDE Internship",
    description:
      "Software development engineer internships across teams. Apply early; Amazon Future Engineer scholars often get a direct pathway.",
    url: "https://www.amazon.jobs/en/teams/internships-for-students",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["SDE", "summer"],
    eligibility: "Undergrads pursuing CS / related majors",
  },
  {
    id: "extern",
    name: "Extern (formerly Externship)",
    description:
      "Flexible, project-based externships with real companies — a strong first résumé line when a full summer internship isn’t locked yet.",
    url: "https://www.extern.com/",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["project-based", "flexible", "remote"],
    eligibility: "College students · many majors",
  },

  // ——— Learning & prep ———
  {
    id: "cs50",
    name: "Harvard CS50",
    description:
      "Free intro CS course used by thousands of first-years to build foundations before (or alongside) their first college CS class.",
    url: "https://cs50.harvard.edu/x/",
    audiences: ["college-first-year", "high-school"],
    category: "learning",
    tags: ["intro CS", "free", "foundations"],
    eligibility: "Anyone — great for HS & first-years",
  },
  {
    id: "neetcode",
    name: "NeetCode / Blind 75",
    description:
      "Structured interview practice roadmap. Start lightly as a first-year; ramp up before sophomore internship season.",
    url: "https://neetcode.io/",
    audiences: ["college-first-year"],
    category: "learning",
    tags: ["interview prep", "algorithms"],
    eligibility: "Students preparing for tech interviews",
  },
  {
    id: "first-gen-scholars",
    name: "First Gen Scholars — College Access",
    description:
      "Our home base: summer program, mentoring, and debt-free college navigation for first-generation, low-income scholars.",
    url: "https://www.firstgenscholars.org/",
    audiences: ["high-school", "college-first-year"],
    category: "program",
    tags: ["first-gen", "mentorship", "debt-free"],
    eligibility: "First-gen, low-income students",
  },
  {
    id: "fastweb",
    name: "Fastweb Scholarship Search",
    description:
      "Large scholarship database — useful for juniors and seniors casting a wide net beyond big-name awards.",
    url: "https://www.fastweb.com/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["database", "search", "all majors"],
    eligibility: "HS students · all backgrounds",
  },
  {
    id: "scholarships-com",
    name: "Scholarships.com",
    description:
      "Searchable scholarship board with filters for major, state, and demographics. Pair with FAFSA and institutional aid.",
    url: "https://www.scholarships.com/",
    audiences: ["high-school", "college-first-year"],
    category: "scholarship",
    tags: ["database", "search"],
    eligibility: "HS & college students",
  },
];
