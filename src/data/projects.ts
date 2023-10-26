interface Project {
  name: string
  description: string
  pic: string
  subtitle?: string
  tech: string[]
  links: {
    label: string
    icon:
      | 'github'
      | 'link'
      | 'youtube'
      | 'devpost'
      | 'email'
      | 'document'
      | 'linkedin'
    url: string
  }[]
}

export const PROJECTS: Project[] = [
  {
    name: 'Bictory.domains',
    description:
      'ULinks.io is a platform for students to browse & upload academic group chats to stay connected during online school',
    pic: '/projects-img/project-1.png',
    tech: ['Nextjs', 'Fsd Architecture', 'MUI library'],
    links: [
      {
        label: 'Website',
        icon: 'link',
        url: 'https://bictory.domains/'
      },
      {
        label: 'Github',
        icon: 'github',
        url: 'https://github.com/behruzprof/bictory.domains'
      }
    ]
  },
  {
    name: 'X-NAMES-LANDING-DAPP',
    description:
      'UTAP is the official platform for all MCS TA postings @ UTM enabling students and instructors to apply for postings and manage applications.',
    pic: '/projects-img/project-2.png',
    tech: ['React', 'Vite', 'MUI library'],
    links: [
      {
        label: 'Github',
        icon: 'github',
        url: 'https://github.com/behruzprof/x-names-landing-dapp'
      }
    ]
  },
  {
    name: 'Bictory NFT',
    description:
      'PostureAI is an AI powered posture improvement web app, used by 200 monthly active users, that helps you maintain healthy posture while working.',
    subtitle: '1st Place in Best Use of GCP',
    pic: '/projects-img/project-3.png',
    tech: ['React', 'TypeScript', 'i18next', 'gsap'],
    links: [
      {
        label: 'Website',
        icon: 'link',
        url: 'https://bictory.io/'
      },
      {
        label: 'Github',
        icon: 'github',
        url: 'https://github.com/behruzprof/bictory-nft'
      },
      {
        label: 'Demo',
        icon: 'youtube',
        url: 'https://www.youtube.com/watch?v=PJb_5QpC-NE'
      }
    ]
  },
  {
    name: 'Bictory CNS',
    description:
      'PostureAI is an AI powered posture improvement web app, used by 200 monthly active users, that helps you maintain healthy posture while working.',
    subtitle: '1st Place in Best Use of GCP',
    pic: '/projects-img/project-4.webp',
    tech: ['React', 'TypeScript', 'i18next', 'MUI library'],
    links: [
      {
        label: 'Demo',
        icon: 'youtube',
        url: 'https://youtu.be/Ykt4VdsKH8A'
      },
      {
        label: 'Github',
        icon: 'github',
        url: 'https://github.com/behruzprof/bictory-cns'
      },
    ]
  }
]
