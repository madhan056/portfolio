// Single source of truth for the contact/social details rendered in
// HeroSection, Navbar, and ContactSection, so updating an address only
// means editing it here.
export const profile = {
  name: "Madhan Thangavel",
  title: "Python Full Stack Developer",
  location: "Chennai, Tamil Nadu",
  email: "madhanthangavelu04@gmail.com",
  phone: {
    display: "+91 93607 39056",
    href: "tel:+919360739056",
  },
  github: {
    display: "github.com/Madhan056",
    href: "https://github.com/Madhan056",
  },
  linkedin: {
    display: "linkedin.com/in/madhan04",
    href: "https://www.linkedin.com/in/madhan04",
  },
  website: {
    display: "madhan056.github.io/portfolio",
    href: "https://madhan056.github.io/portfolio",
  },
  resumeUrl: "https://drive.google.com/uc?export=download&id=1IPMGYZX6LBMmuSZKC68hZjk1FeQBwT29",
} as const;

export const mailtoHref = `mailto:${profile.email}`;
