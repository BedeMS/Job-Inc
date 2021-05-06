import uniqid from "uniqid";

const td = {
  follow: false,
  name: "Toronto Dominion - TD",
  banner:
    "https://www.tdcanadatrust.com/images/banking/credit_card/TDCT_Electra_June16-banner.jpg",
  logo:
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/TD_Canada_Trust_logo.svg/1200px-TD_Canada_Trust_logo.svg.png",
  repName: "Rara Monke",
  email: "goo@gmail.com",
  id: "td-32940823",
  info: [
    { website: "www.td.com" },
    { headquarter: "Boston, Mas" },
    {
      socialMedia: [
        { linkedin: "www.instagram.com" },
        { facebook: "www.facebook.com" },
        { instagram: "www.instagram.com" },
        { linkedin: "www.instagram.com" },
      ],
    },
    { size: "50-10,000" },
    { founded: 1985 },
    { industry: "Investment" },
  ],
  jobs: [
    {
      title: "Front-End Developer",
      location: "Toronto, Ontario",
      type: "Full Time",
      date: "April 01, 2021",
      saved: false,
      id: uniqid(),
      sections: [
        {
          title: "Job Description",
          description: `
                    This position is for the SS&C Technologies Holdings, Inc. is a global provider of financial services software and
                    software-enabled services. Founded in 1986, SS&C has built the most comprehensive powerhouse of software
                    technology in the financial services industry and technology that complements our unrivalled expertise and
                    professionalism in fund administration, insurance and pension funds, and asset and wealth management
                    accounting and operations. Named by Forbes as one of America's best midsize employers, SS&C has more than
                    20,000 employees and 15,000 clients worldwide, and is headquartered in Windsor, Connecticut, with offices
                    throughout North America, Europe, Asia Pacific, Africa, and Australia. SS&C recently made the TOP 10 list of
                    Fastest Growing Companies in US, according with Forbes Magazine.
                    `,
        },
        {
          title: "Requirements",
          description: `
                  Write maintainable, testable, and performant software in collaboration with our world class team
                    Participate in code review and performing extensive testing to ensure high quality software
                    Research new technology and tools and share those findings with the team
                    Communicate clearly and effectively with all members of our team
                  `,
        },
        {
          title: "Benefits",
          description: `
                Flexible Vacation Policy
                Health & Wellness Programs
                Culture of Learning & Development
                Fully-Stocked Kitchens & Lounges
                New Shiny Device Upgrades
                Monthly Socials & Team Outings
                `,
        },
      ],
    },
    {
      saved: false,
      id: uniqid(),
      title: "Head of Finance",
      location: "London, Ontario",
      type: "Full Time",
      date: "2021-02-15",
      sections: [
        {
          title: "Job Description",
          description: `
                Are you the one? You are a strong written communicator who is well versed in SEO. You are comfortable living and breathing the fast pace that is start-up life. You are self-motivated, have a high attention to detail, and a passion for crushing your goals. You also take ownership over the entire Acadium experience. Your contributions don’t stop with content - you’re constantly collecting customer feedback and suggesting updates to our process, product, marketing, and customer service.
                      `,
        },
        {
          title: "Requirements",
          description: `
                Data modeling and developing/maintaining core ETL pipelines and tables
                Help develop strategy/solution for data discovery and metrics management
                Build upon and document our common data framework
                Advocate for improvements to data quality, security, and performance
                Design internal standards for style, maintainability, and best practices for a high-scale data infrastructure
                Coach analysts on software engineering best practices (e.g., using version control, writing performant SQL, how to communicate data issues)
                Collaborate with data engineers on infrastructure projects and advocate for and emphasize the business value of applications
                Develop and communicate strong opinions about best practices in Analytics Engineering
                    `,
        },
        {
          title: "What it takes",
          description: `
                As part of a growing team as a Social Media Coordinator, you will focus on social advertising and social selling of healthcare products and services. To succeed in this position, you will bring forward thinking attitude and strong knowledge of social media advertising to help grow our e-commerce business globally. This candidate should bring a demonstrated ability to build and maintain an engaged social media community.
      
      
                  `,
        },
      ],
    },
  ],
};

export default td;
