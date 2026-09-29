const profile = {
  name: "Raphael Moreira",
  tagline:
    "Software engineer building full stack web applications in React, Node.js, and PostgreSQL, from data model to deployed product.",
  location: "Newark, New Jersey",
  availability: "Open to front end, back end & full stack roles",
  email: "raphaelmor711@gmail.com",
  github: "https://github.com/RaphaelM20",
  linkedin: "https://www.linkedin.com/in/raphael-moreira20/",
  resume: "/raphael-resume.pdf",
  headshot:
    "https://res.cloudinary.com/zrc0epiv/image/upload/v1788980204/headshot_cathwp.webp",
  photos: {
    me: {
      src: "https://res.cloudinary.com/zrc0epiv/image/upload/v1789061706/me_pqyo29.webp",
      alt: "Photo of Raphael Moreira",
    },
    cat: {
      src: "https://res.cloudinary.com/zrc0epiv/image/upload/v1789061699/ellie_wv5yfs.webp",
      alt: "Ellie, Raphael's cat",
      caption: "Ellie, my cat",
    },
  },
  // Quick facts shown beside the About text, drawn from aboutMe.js and the resume.
  facts: [
    { label: "Experience", value: "2 years in production WMS support, Bergen Logistics" },
    { label: "Education", value: "B.E.T. in Computer Technology, NJIT" },
    { label: "Honors", value: "3.75 GPA · Dean's List" },
    { label: "Stack", value: "React, Node.js, Express, PostgreSQL, Prisma" },
  ],
  projectsIntro:
    "Full stack apps built with React, Node.js, Express, and PostgreSQL, plus a vanilla JavaScript game tested with Jest.",
};

export default profile;
