export type Audience = "high-school" | "college-first-year" | "all";
export type Category =
  | "scholarship"
  | "fly-in"
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
  "fly-in": "Fly-In Programs",
  community: "Communities",
  internship: "Internships & Early Career",
  program: "Programs & Fellowships",
  learning: "Learning & Prep",
};

export const resources: Resource[] = [
  // ——— Fly-in / campus visit programs (HS) ———
  {
    id: "collegevine-fly-in-list",
    name: "College Fly-In & Diversity Programs Directory",
    description:
      "CollegeVine’s complete list of 45+ college fly-in and diversity visit programs for prospective students. Colleges often cover travel, lodging, and meals so first-gen and low-income students can visit campus.",
    url: "https://blog.collegevine.com/college-fly-in-and-diversity-programs-a-complete-list",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["directory", "first-gen", "campus visit"],
    eligibility: "Mostly HS seniors · deadlines vary by school",
  },
  {
    id: "coalition-fly-in-list",
    name: "Coalition for College — Fly-In & Visit Programs",
    description:
      "Updated list of fly-in and access-focused visit experiences at Coalition member schools, including dates for the current cycle.",
    url: "https://www.coalitionforcollegeaccess.org/mycoalition-counselor-all/fly-in-programs-visits",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["directory", "Coalition", "campus visit"],
    eligibility: "HS juniors & seniors · see each school’s page",
  },
  {
    id: "amherst-a2a",
    name: "Access to Amherst (A2A)",
    description:
      "Fall fly-in introducing Amherst’s campus, classes, and financial aid. Centers students from marginalized communities, first-gen students, and those who may not be able to visit on their own.",
    url: "https://www.amherst.edu/admission/diversity/a2a",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["first-gen", "liberal arts", "fall"],
    eligibility: "Rising HS seniors in the U.S.",
  },
  {
    id: "bates-prologue",
    name: "Prologue to Bates",
    description:
      "All-expenses-paid autumn fly-in aligned with Bates Fall Visit Day. Especially encourages first-generation and low-income seniors from the U.S. and Puerto Rico.",
    url: "https://www.bates.edu/admission/connect-with-bates/prologue/",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["first-gen", "all expenses paid", "fall"],
    eligibility: "HS seniors · U.S. & Puerto Rico",
  },
  {
    id: "bowdoin-explore",
    name: "Explore Bowdoin",
    description:
      "Fully covered campus visit with overnight stays, classes, clubs, and admissions/financial aid sessions. Priority for low-income and first-generation applicants. Sessions in September and October.",
    url: "https://www.bowdoin.edu/admissions/visit/explore-bowdoin/",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["first-gen", "all expenses paid", "fall"],
    eligibility: "Prospective students · priority for first-gen / low-income",
  },
  {
    id: "swarthmore-discover",
    name: "Discover Swarthmore",
    description:
      "All-expenses-paid overnight fly-in (travel, meals, housing covered). Preference for first-gen students, low-income students, and those who couldn’t otherwise afford a visit.",
    url: "https://www.swarthmore.edu/admissions-aid/discover-swarthmore-fly-program",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["first-gen", "all expenses paid", "fall"],
    eligibility: "Rising HS seniors · U.S. / territories · DACA welcome",
  },
  {
    id: "mit-wise",
    name: "MIT WISE (Weekend Immersion in Science & Engineering)",
    description:
      "Free three-day immersion at MIT, including transportation. Strongly encourages students from underserved backgrounds, rural areas, low-income families, and potential first-gen college students.",
    url: "https://mitadmissions.org/pages/wise/",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["STEM", "first-gen", "all expenses paid"],
    eligibility: "Rising HS seniors · U.S. / territories",
  },

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

  // ——— College communities ———
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
