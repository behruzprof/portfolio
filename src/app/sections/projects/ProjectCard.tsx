import {
  Anchor,
  Card,
  Code,
  Divider,
  Flex,
  Image,
  Text,
  Title,
  Tooltip
} from '@mantine/core'
import {
  IconBrandGithub,
  IconLink,
  IconBrandYoutube,
  IconDeviceImacDollar,
  IconRecordMail,
  IconFile,
  IconBrandLinkedin
} from '@tabler/icons-react'

interface ProjectCardProps {
  name: string
  description: string
  pic: string
  subtitle?: string
  tech: string[]
  links: {
    label: string
    icon: keyof typeof ICONS
    url: string
  }[]
  reverse: boolean
}

const ICONS = {
  github: IconBrandGithub,
  link: IconLink,
  youtube: IconBrandYoutube,
  devpost: IconDeviceImacDollar,
  email: IconRecordMail,
  document: IconFile,
  linkedin: IconBrandLinkedin
}

export const ProjectCard = ({
  name,
  description,
  pic,
  subtitle,
  links,
  tech,
  reverse
}: ProjectCardProps) => {
  return (
    <Flex
      direction={reverse ? 'row-reverse' : 'row'}
      justify={{ base: 'center', sm: 'space-between' }}
      align='center'
      w='100%'
      wrap={{ base: 'wrap-reverse', sm: 'nowrap' }}
      columnGap='20px'
    >
      <Flex
        maw={{ base: '300px', sm: '400px', md: '500px' }}
        direction='column'
        rowGap='md'
      >
        <Card withBorder>
          <Title order={4}>
            <Anchor href={links[0].url}>{name}</Anchor>
          </Title>
          <Title order={6}>{subtitle}</Title>
          <Text>{description}</Text>
          <Flex justify='end' columnGap='sm' mt='md'>
            {links.map(({ icon, label, url }) => {
              const SelectedIcon = ICONS[icon]

              return (
                <Tooltip key={label} label={label}>
                  <Anchor href={url}>
                    <SelectedIcon />
                  </Anchor>
                </Tooltip>
              )
            })}
          </Flex>
        </Card>
        <Flex columnGap='sm' justify='center' wrap='wrap' rowGap='xs'>
          {tech.map((item) => (
            <Code key={item}>{item}</Code>
          ))}
        </Flex>
        <Divider />
      </Flex>
      <Image
        maw={{ base: '300px', sm: '400px', md: '500px' }}
        w='100%'
        fit='fill'
        src={pic}
      />
    </Flex>
  )
}
