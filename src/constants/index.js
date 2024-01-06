import {
  frontend,
  backend,
  embedded,
  gamedev,
  python,
  java,
  cplus,
  javascript,
  html,
  css,
  reactjs,

  nodejs,
  git,
  
  frogwall,
  astroparty,
  softhardware,
  msxu,
  sunnyminded,
  danceextension,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Embedded Systems',
    icon: embedded,
  },
  
  {
    title: 'Game Development',
    icon: gamedev,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'C++',
    icon: cplus,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  
  {
    name: 'React JS',
    icon: reactjs,
  },
  
  
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
  {
    name: 'git',
    icon: git,
  },
  
];

const experiences = [
  {
    title: 'IT Technician',
    company_name: 'Ms Xu Consulting',
    icon: msxu,
    iconBg: '#EFEFEF',
    date: 'Aug 2021 - Aug 2023',
  },
  {
    title: 'Localization intern',
    company_name: 'SunnyMindED',
    icon: sunnyminded,
    iconBg: '#333333',
    date: 'Aug 2020 - May 2021',
  },
 
];

const projects = [
  {
    id: 'project-1',
    name: 'Youtube Dance Assist',
    description: 'A Chrome extension that helps you learn dance moves from Youtube videos.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: danceextension,
    repo: 'https://github.com/AlbertXylonWang/YoutubeDanceExtension',
    demo: 'https://chromewebstore.google.com/detail/dance-practice-assist-for/ldlapkanohjmjepklnhnohdhofbnnfih?hl=en',
  },
  {
    id: 'project-2',
    name: 'SoftHardware',
    description:
      'A hardware as a service app that allows users to rent hardware for a period of time.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    demo: '',
    repo: '',
    image: softhardware,

  },
  {
    id: 'project-3',
    name: 'TM4C Astroparty',
    description: 'This is an embedded programming project in which we implemented a lite version of Astroparty on a TM4C microcontroller. ',
    tags: [
      {
        name: 'C',
        color: 'blue-text-gradient',
      },
      {
        name: 'embedded',
        color: 'green-text-gradient',
      },
    ],
    image: astroparty,
    repo: '',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'FrogWall',
    description: `A single stage game that involves jumping over a wall of frogs to pickup a diamond.`,
    tags: [
      {
        name: 'godot',
        color: 'blue-text-gradient',
      },
      {
        name: 'gdscript',
        color: 'green-text-gradient',
      },
      
    ],
    image: frogwall,
    repo: 'https://github.com/AlbertXylonWang/GodotMisc',
    demo: 'https://albertxylonwang.itch.io/frog-wall',
  },
  
];

export { services, technologies, experiences, projects };
