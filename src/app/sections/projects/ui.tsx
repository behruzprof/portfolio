import { Flex } from '@mantine/core'

import { SectionContainer } from '@/app/components'
import { ProjectCard } from './ProjectCard'
import { PROJECTS } from '@/data/projects'

export const Projects = () => {
  return (
    <SectionContainer title='Featured Projects'>
      <Flex direction='column' rowGap='md'>
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={project.name}
            reverse={Boolean(idx % 2)}
            {...project}
          />
        ))}
      </Flex>
    </SectionContainer>
  )
}
