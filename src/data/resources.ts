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
  {
    id: "questbridge-fly-ins",
    name: "QuestBridge Fall Fly-In Program List",
    description:
      "QuestBridge’s curated table of fall fly-in programs at partner colleges, with application deadlines and program dates for the current cycle.",
    url: "https://www.questbridge.org/resources/fly-in-programs",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["directory", "QuestBridge", "deadlines"],
    eligibility: "Mostly rising HS seniors · see each school",
  },
  {
    id: "pomona-pop",
    name: "Perspectives on Pomona (POP)",
    description:
      "Fall fly-in (plus virtual options) focused on first-gen, low- and middle-income students, and students whose lived experiences shape their identities. Travel support available.",
    url: "https://www.pomona.edu/admissions/diversity/fall-fly-program-pop",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["first-gen", "California", "fall"],
    eligibility: "HS seniors in the U.S. · DACA welcome",
  },
  {
    id: "carleton-toc",
    name: "Taste of Carleton",
    description:
      "Free, all-expenses-paid fly-in for seniors with limited access to college exploration resources. Attend classes, tour campus, and learn about admissions and financial aid.",
    url: "https://www.carleton.edu/admissions/visit/toc/",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["first-gen", "all expenses paid", "liberal arts"],
    eligibility: "HS seniors · U.S. high schools",
  },
  {
    id: "emory-leads",
    name: "Emory LEADs Experience",
    description:
      "Hybrid college-access program with monthly virtual support and a selective overnight Leadership Retreat. Designed for first-gen, rural, and lower-socioeconomic seniors who may not otherwise visit campus.",
    url: "https://apply.emory.edu/leads/index.html",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["first-gen", "hybrid", "leadership"],
    eligibility: "HS seniors · open to apply · focused programming for access students",
  },
  {
    id: "tufts-voices",
    name: "Voices of Tufts",
    description:
      "Visit program introducing belonging and community at Tufts through student conversations, admissions workshops, and campus programming. Virtual and on-campus options.",
    url: "https://admissions.tufts.edu/voices/voices-home/",
    audiences: ["high-school"],
    category: "fly-in",
    tags: ["diversity", "belonging", "fall"],
    eligibility: "Rising seniors · U.S. high schools",
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
  {
    id: "dell-scholars",
    name: "Dell Scholars",
    description:
      "Scholarship plus laptop, textbook support, and multi-year college coaching for Pell-eligible students who participated in a college-readiness program in high school.",
    url: "https://www.dellscholars.org/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["Pell-eligible", "coaching", "tech stipend"],
    eligibility: "HS seniors · Pell-eligible · college-readiness program",
  },
  {
    id: "ron-brown",
    name: "Ron Brown Scholar Program",
    description:
      "Scholarship and leadership community for academically talented African American high school seniors, with college and career support beyond funding.",
    url: "https://www.ronbrown.org/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["leadership", "African American", "mentorship"],
    eligibility: "HS seniors · African American · U.S. citizens / permanent residents",
  },
  {
    id: "jackie-robinson",
    name: "Jackie Robinson Foundation Scholarship",
    description:
      "Four-year scholarship and leadership development for minority students of color, including mentoring, internship support, and a national peer network.",
    url: "https://www.jackierobinson.org/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["leadership", "mentorship", "internship support"],
    eligibility: "HS seniors · minority students · financial need",
  },
  {
    id: "hsf",
    name: "Hispanic Scholarship Fund",
    description:
      "Scholarships and college-success programming for students of Hispanic heritage across majors — one of the largest Hispanic scholarship organizations in the U.S.",
    url: "https://www.hsf.net/",
    audiences: ["high-school", "college-first-year"],
    category: "scholarship",
    tags: ["Hispanic", "all majors", "college success"],
    eligibility: "Hispanic heritage · HS seniors & college students",
  },
  {
    id: "apia-scholars",
    name: "APIA Scholars",
    description:
      "Scholarships for Asian American, Native Hawaiian, and Pacific Islander students, with a focus on underserved AANHPI communities and first-gen college-goers.",
    url: "https://apiascholars.org/scholarship/apia-scholarship/",
    audiences: ["high-school", "college-first-year"],
    category: "scholarship",
    tags: ["AANHPI", "first-gen", "underserved communities"],
    eligibility: "AANHPI students · see current cycle criteria",
  },
  {
    id: "point-foundation",
    name: "Point Foundation",
    description:
      "Scholarships, mentoring, and leadership development for LGBTQ students pursuing undergraduate or graduate degrees.",
    url: "https://www.pointfoundation.org/",
    audiences: ["high-school", "college-first-year"],
    category: "scholarship",
    tags: ["LGBTQ", "mentorship", "leadership"],
    eligibility: "LGBTQ students · undergrad & grad pathways",
  },
  {
    id: "thedream-us",
    name: "TheDream.US Scholarship",
    description:
      "College scholarships for Dreamers (DACA/TPS and similarly situated students) to attend partner colleges, plus advising and a scholar community.",
    url: "https://www.thedream.us/",
    audiences: ["high-school", "college-first-year"],
    category: "scholarship",
    tags: ["Dreamers", "DACA", "partner colleges"],
    eligibility: "Dreamer students · see partner college list",
  },
  {
    id: "equitable-excellence",
    name: "Equitable Excellence Scholarship",
    description:
      "National scholarship recognizing high school seniors for academics, community impact, and leadership — open across majors.",
    url: "https://www.equitable.com/foundation/equitable-excellence-scholarship",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["merit", "leadership", "all majors"],
    eligibility: "HS seniors · U.S.",
  },
  {
    id: "elks-scholars",
    name: "Elks National Foundation Scholarships",
    description:
      "Multiple ENF scholarship programs for high school seniors, including need-based and merit awards administered through local Elks lodges.",
    url: "https://www.elks.org/scholars/",
    audiences: ["high-school"],
    category: "scholarship",
    tags: ["need-based", "merit", "local lodge"],
    eligibility: "HS seniors · U.S. citizens",
  },
  {
    id: "bold-org",
    name: "Bold.org Scholarships",
    description:
      "Free scholarship search and application platform with thousands of awards across interests, identities, and majors.",
    url: "https://www.bold.org/",
    audiences: ["high-school", "college-first-year"],
    category: "scholarship",
    tags: ["database", "search", "free"],
    eligibility: "HS & college students",
  },
  {
    id: "scholarship-america",
    name: "Scholarship America — Student Hub",
    description:
      "National nonprofit that administers many corporate and community scholarships. Browse open programs and application portals in one place.",
    url: "https://www.scholarshipamerica.org/students/",
    audiences: ["high-school", "college-first-year"],
    category: "scholarship",
    tags: ["database", "corporate", "community"],
    eligibility: "Varies by program",
  },
  {
    id: "fafsa",
    name: "FAFSA — Free Application for Federal Student Aid",
    description:
      "Required starting point for federal grants, work-study, loans, and most college financial aid packages. File as early as possible each year.",
    url: "https://studentaid.gov/h/apply-for-aid/fafsa",
    audiences: ["high-school", "college-first-year"],
    category: "learning",
    tags: ["financial aid", "federal", "required"],
    eligibility: "College-bound students & current undergrads",
  },
  {
    id: "common-app",
    name: "Common App",
    description:
      "One application used by 1,000+ colleges. Includes fee waivers for eligible students and a central place to manage deadlines and recommendations.",
    url: "https://www.commonapp.org/",
    audiences: ["high-school"],
    category: "learning",
    tags: ["applications", "fee waiver", "college list"],
    eligibility: "HS seniors applying to college",
  },
  {
    id: "bigfuture",
    name: "BigFuture by College Board",
    description:
      "Free college search, career exploration, scholarship tools, and planning resources from College Board — useful for juniors building a balanced list.",
    url: "https://bigfuture.collegeboard.org/",
    audiences: ["high-school"],
    category: "learning",
    tags: ["college search", "planning", "free"],
    eligibility: "HS students · all backgrounds",
  },
  {
    id: "im-first",
    name: "I'm First!",
    description:
      "First-gen student stories, college-search tools, and guidance built specifically for students who will be the first in their family to go to college.",
    url: "https://www.imfirst.org/",
    audiences: ["high-school", "college-first-year"],
    category: "learning",
    tags: ["first-gen", "stories", "college search"],
    eligibility: "First-generation college-bound students",
  },
  {
    id: "college-possible",
    name: "College Possible",
    description:
      "Near-peer coaching for low-income students through college applications, enrollment, and persistence — including ACT/SAT prep and scholarship support.",
    url: "https://www.collegepossible.org/",
    audiences: ["high-school", "college-first-year"],
    category: "program",
    tags: ["coaching", "low-income", "persistence"],
    eligibility: "See local program sites · low-income focus",
  },
  {
    id: "bottom-line",
    name: "Bottom Line",
    description:
      "One-on-one advising that helps first-gen and low-income students get into college, graduate, and find strong first jobs.",
    url: "https://www.bottomline.org/",
    audiences: ["high-school", "college-first-year"],
    category: "program",
    tags: ["advising", "first-gen", "career"],
    eligibility: "Serves select cities · first-gen / low-income",
  },
  {
    id: "imentor",
    name: "iMentor",
    description:
      "College-access mentoring that pairs high school students with college-educated mentors for multi-year support through applications and the transition to campus.",
    url: "https://www.imentor.org/",
    audiences: ["high-school"],
    category: "program",
    tags: ["mentorship", "college access"],
    eligibility: "Partner high schools · see local availability",
  },
  {
    id: "csac",
    name: "California Student Aid Commission (CSAC)",
    description:
      "Official hub for California state aid programs like Cal Grant. Essential for California residents filing FAFSA/CADAA and tracking state awards.",
    url: "https://www.csac.ca.gov/",
    audiences: ["high-school", "college-first-year"],
    category: "learning",
    tags: ["California", "Cal Grant", "state aid"],
    eligibility: "California residents",
  },
  {
    id: "hesc-ny",
    name: "NY Higher Education Services Corporation (HESC)",
    description:
      "New York’s state student aid agency — TAP, Excelsior, and other NY grant/scholarship programs for residents.",
    url: "https://www.hesc.ny.gov/",
    audiences: ["high-school", "college-first-year"],
    category: "learning",
    tags: ["New York", "TAP", "state aid"],
    eligibility: "New York residents",
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
  {
    id: "seo",
    name: "SEO (Sponsors for Educational Opportunity)",
    description:
      "Career programs connecting underrepresented college students to internships and recruiting pipelines in business, law, and related fields.",
    url: "https://www.seo-usa.org/",
    audiences: ["college-first-year"],
    category: "program",
    tags: ["internships", "career", "underrepresented"],
    eligibility: "Undergrads · see program tracks",
  },
  {
    id: "mlt",
    name: "Management Leadership for Tomorrow (MLT)",
    description:
      "Career preparation for Black, Latinx, and Native American students — coaching, recruiting access, and a peer community across industries.",
    url: "https://www.mlt.org/",
    audiences: ["college-first-year"],
    category: "program",
    tags: ["career coaching", "leadership", "recruiting"],
    eligibility: "Undergrads & early career · see eligibility",
  },
  {
    id: "firstgen-forward",
    name: "FirstGen Forward",
    description:
      "NASPA’s national first-gen student success network — research, toolkits, and campus resources for first-generation college students and the staff who support them.",
    url: "https://firstgen.naspa.org/",
    audiences: ["college-first-year"],
    category: "learning",
    tags: ["first-gen", "campus success", "NASPA"],
    eligibility: "First-gen students & educators",
  },
  {
    id: "year-up",
    name: "Year Up United",
    description:
      "Skills training, stipends, and corporate internships for young adults — a pathway into professional careers alongside or instead of a traditional four-year start.",
    url: "https://www.yearup.org/",
    audiences: ["high-school", "college-first-year"],
    category: "program",
    tags: ["workforce", "internship", "stipend"],
    eligibility: "Young adults · see local program criteria",
  },
  {
    id: "genesys-works",
    name: "Genesys Works",
    description:
      "High school seniors from underserved communities get training plus a paid internship with a major company during senior year — strong early professional experience.",
    url: "https://www.genesysworks.org/",
    audiences: ["high-school"],
    category: "internship",
    tags: ["paid internship", "high school", "career"],
    eligibility: "HS seniors · select metro areas",
  },
  {
    id: "ptk",
    name: "Phi Theta Kappa (PTK)",
    description:
      "International honor society for community college students — scholarships, transfer pathways, and leadership development for high-achieving two-year students.",
    url: "https://www.ptk.org/",
    audiences: ["college-first-year"],
    category: "community",
    tags: ["community college", "transfer", "scholarships"],
    eligibility: "Community college students · GPA criteria",
  },
  {
    id: "google-students",
    name: "Google Careers for Students",
    description:
      "Official hub for Google internships, apprenticeships, and student programs across engineering and non-engineering roles when applications are open.",
    url: "https://www.google.com/students/",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["Google", "internships", "apprenticeships"],
    eligibility: "Students · roles vary by posting",
  },
  {
    id: "microsoft-students",
    name: "Microsoft University Recruiting",
    description:
      "Microsoft’s student and early-career hub for internships and full-time university programs across engineering, business, and design.",
    url: "https://careers.microsoft.com/students/",
    audiences: ["college-first-year"],
    category: "internship",
    tags: ["Microsoft", "internships", "university"],
    eligibility: "Students · roles vary by posting",
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
