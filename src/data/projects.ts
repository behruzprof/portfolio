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
    name: 'ULinks.io',
    description:
      'ULinks.io is a platform for students to browse & upload academic group chats to stay connected during online school',
    pic: 'https://randomwordgenerator.com/img/picture-generator/57e3d74a4a54ad14f1dc8460962e33791c3ad6e04e5074417c2f7dd59549c1_640.jpg',
    tech: ['React', 'GraphQL', 'Node.js'],
    links: [
      {
        label: 'Github',
        icon: 'github',
        url: 'https://github.com/jcserv/ulinks'
      }
    ]
  },
  {
    name: 'UTM TA Application System',
    description:
      'UTAP is the official platform for all MCS TA postings @ UTM enabling students and instructors to apply for postings and manage applications.',
    pic: 'https://randomwordgenerator.com/img/picture-generator/57e3d74a4a54ad14f1dc8460962e33791c3ad6e04e5074417c2f7dd59549c1_640.jpg',
    tech: ['React', 'Node.js'],
    links: [
      {
        label: 'Website',
        icon: 'link',
        url: 'https://utap.utm.utoronto.ca/utap/'
      }
    ]
  },
  {
    name: 'PostureAI',
    description:
      'PostureAI is an AI powered posture improvement web app, used by 200 monthly active users, that helps you maintain healthy posture while working.',
    subtitle: '1st Place in Best Use of GCP',
    pic: 'https://randomwordgenerator.com/img/picture-generator/57e3d74a4a54ad14f1dc8460962e33791c3ad6e04e5074417c2f7dd59549c1_640.jpg',
    tech: ['React', 'TypeScript'],
    links: [
      {
        label: 'Website',
        icon: 'link',
        url: 'https://postureai.tech/'
      },
      {
        label: 'Github',
        icon: 'github',
        url: 'https://github.com/jcserv/PostureAI'
      },
      {
        label: 'Demo',
        icon: 'youtube',
        url: 'https://www.youtube.com/watch?v=SqUmP6npKYM'
      },
      {
        label: 'Devpost',
        icon: 'devpost',
        url: 'https://devpost.com/software/placeholder-9gjdst'
      }
    ]
  }
]
