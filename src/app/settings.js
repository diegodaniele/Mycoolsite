import previewMacenger from './assets/images/library.jpg';
import previewMusish from './assets/images/tech.gif';
import previewNeene from './assets/images/anim.gif';

export default {
  name: 'Diego',
  fullName: 'Diego Daniele',
  siteDomain: 'coolsite',
  biography:
    "I'm a Full-Stack Developer currently working for <strong>NTT Data</strong> in Turin. I focus on designing and developing quality apps with <strong>Java</strong>, <strong>Angular</strong>,<strong>JavaScript</strong>, <strong>HTML</strong>,\n and <strong>CSS</strong>.\n I love web design/develop and UX design , when i have free time i spent a lot on study latest web design tech and create cool things!",
  experience: [
    {
      position: 'Full-Stack Developer Junior',
      company: 'NTT Data',
      location: 'Turin, Italy',
      time: 'September 2019 - Present',
      achievements: [
        "Worked on a VideoChat application built in Spring,  Node.js and Angular for deposit money on a digital wallet with various step",
        "Worked on a calculation engine built in Java , JSF pages and MongoDB , improved with REST Call's from remote",
        'Trying to improve myself everyday and learn as much as i can !',
      ],
    },
    {
      position: 'Freelancer',
      company: 'Freelance',
      location: 'Remote',
      time: 'September 2019 - Present',
      achievements: [
        'When i have free time i m trying to work as a freelance for a UX/Web design projects to improve myself on this sector!',
      ],
    },
  ],
  projects: [
    {
      name: 'SpringBoot+Angular+Sql BookShelter',
      url: "https://github.com/diegodaniele/SpringBoot-Angular-library",
      preview: previewMacenger,
      previewTitle: 'BookShelter',
      previewType: 'window',
      description:
        'Developing a BookShelter app to organize book for name, author, genre , it can be improved for used in every scenario !',
      skills: ['Java', 'MySql', 'Angular', 'Spring'],
    },
    {
      name: 'XML-Batch Util',
      url: 'https://github.com/diegodaniele/XML_Batch_Utils',
      preview: previewMusish,
      previewTitle: 'BatchUtils',
      previewType: 'window',
      description:
        'A powerful app built in Spring-Batch, can be used for like anything you need, just add a Job for what you need and you can run a batch from command line to start it! ',
      skills: ['Java', 'Spring-Batch', 'XmlConverter'],
    },
    {
      name: 'Animated Landing Page',
      url: 'https://github.com/diegodaniele/portfolio',
      preview: previewNeene,
      previewTitle: 'Portfolio | LandingPage',
      previewType: 'window',
      description:
        "A portfolio Animated landing page prototype built with Three.js and React libraries",
      skills: ['React', 'Three.js', 'JavaScript', 'HTML', 'CSS'],
    },
  ],
};
