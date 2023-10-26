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
      'Bictory Domains is a distributed, secure, and extensible naming system for Web3, based on the L1 and L2 blockchains. Bictory Domains empowers users to map human-readable names to blockchain identities and resources such as Multiversx addresses and identities, IPFS hashes, texts, socials, web URLs and so much more.',
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
      'xNames are a necessary resource to fully decentralize your website. Link the wallet name to your decentrally hosted website to resist censorship. All Dapps across the MultiversX, your xNames serves as the user and screen names for more dapp usability.',
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
      'Our NFT marketplace project is built on the permissionless L1 Concordium blockchain which is fitted with a zK ID-layer, offering a unique opportunity for privacy and at the same time accountability for individuals and businesses looking to enter the rapidly growing NFT market.',
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
        url: 'https://youtu.be/PJb_5QpC-NE'
      }
    ]
  },
  {
    name: 'Bictory CNS',
    description:
      'The Concordium Name Service (CNS) is a decentralized, open, and multi-utility wallet naming system based on the Self-Sovereign ID Professional Blockchain, Concordium. It maps human-readable and memorable names to hexadecimal wallet addresses for better usability similar to what DNS did for IP addresses.',
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
      }
    ]
  }
]
