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
      "Up to $40,000 for CS-related degrees plus a pathway to a paid summer internship at Amazon. Built for high school seniors with financial need. Cycles open annually (often winter).",
    url: "https://scholarshipamerica.org/scholarship/amazonfutureengineer/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["tech", "CS", "internship pathway"],
    eligibility: "HS seniors · financial need · CS major planned",
  },
  {
    id: "linkedin-possibilities",
    name: "LinkedIn Possibilities in Tech Scholarship",
    description:
      "Up to $40,000 over four years plus mentorship, college navigation, and technical training for future software engineers. Applications typically open in December.",
    url: "https://careers.linkedin.com/pathways-programs/possibilities-scholarship",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["tech", "software engineering", "mentorship"],
    eligibility: "HS seniors · CS / related major · U.S. high school",
  },
  {
    id: "uncf-stem",
    name: "UNCF STEM Scholars Program",
    description:
      "Fund II Foundation / UNCF STEM Scholars — funding and support for high-achieving students pursuing STEM. Apply through UNCF’s scholarship portal when the cycle is open.",
    url: "https://uncf.org/scholarships",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["STEM", "HBCU", "mentorship"],
    eligibility: "HS seniors · STEM path · see UNCF eligibility",
  },
  {
    id: "questbridge",
    name: "QuestBridge National College Match",
    description:
      "Connects high-achieving, low-income students with full four-year scholarships to partner colleges. Strong pathway for first-gen scholars.",
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
    id: "posse",
    name: "Posse Foundation",
    description:
      "Full-tuition leadership scholarships and a supportive cohort model at partner universities. Students are typically nominated.",
    url: "https://www.possefoundation.org/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["full tuition", "cohort", "leadership"],
    eligibility: "HS seniors · nominated by partner orgs / schools",
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
    url: "https://www.mlh.com/",
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
      "Student Training in Engineering Program — software engineering internship for first- and second-year students. Search open STEP roles on Google Careers when the cycle posts.",
    url: "https://www.google.com/about/careers/applications/jobs/results/?q=STEP",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["software engineering", "freshman", "sophomore"],
    eligibility: "First- & second-year undergrads",
  },
  {
    id: "microsoft-explore",
    name: "Explore Microsoft",
    description:
      "12-week summer internship for first- and second-year students exploring software engineering roles with mentoring and a pod model.",
    url: "https://careers.microsoft.com/v2/global/en/exploremicrosoft",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["SWE", "early career"],
    eligibility: "First- & second-year undergrads",
  },
  {
    id: "meta-students",
    name: "Meta Student & Grad Internships",
    description:
      "Meta posts university internships (including early-career engineering roles) on its students careers hub when applications are open.",
    url: "https://www.metacareers.com/careerprograms/students",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["software engineering", "university"],
    eligibility: "College students · roles vary by posting",
  },
  {
    id: "amazon-sde-intern",
    name: "Amazon Student Internships",
    description:
      "Software development and other student internship tracks across Amazon. Apply early; Amazon Future Engineer scholars often get a related pathway.",
    url: "https://www.amazon.jobs/content/en/career-programs/university/internships-for-students",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["SDE", "summer"],
    eligibility: "Undergrads pursuing CS / related majors",
  },
  {
    id: "extern",
    name: "Extern",
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
    name: "NeetCode",
    description:
      "Structured interview practice roadmap. Start lightly as a first-year; ramp up before sophomore internship season.",
    url: "https://neetcode.io/",
    audiences: ["college-first-year"],
    category: "learning",
    tags: ["interview prep", "algorithms"],
    eligibility: "Students preparing for tech interviews",
  },
];
