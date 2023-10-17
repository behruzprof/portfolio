import { SectionContainer } from '@/app/components'
import { useCustomMediaQuery } from '@/app/hooks/useCustomMediaQuery'
import { JOBS } from '@/data/jobs'
import { Anchor, Box, Flex, List, Tabs, Text, Title } from '@mantine/core'

export const Experience = () => {
  const { md } = useCustomMediaQuery()
  return (
    <SectionContainer title='Experience' styles={{ marginTop: '20px' }}>
      <Box maw={'700px'} w='100%' my='lg'>
        <Tabs
          defaultValue={JOBS[0].workplace}
          orientation={md ? 'vertical' : 'horizontal'}
          variant='outline'
          styles={{
            list: {
              marginRight: md ? '40px' : '0',
              marginBottom: md ? '0' : '20px',
              flexWrap: md ? 'wrap' : 'nowrap',
              overflowX: md ? 'visible' : 'auto',
              scrollSnapType: 'x mandatory'
            },
            tab: {
              margin: '5px 0',
              background: 'var(--mantine-color-anchor)',
              color: '#fff',
              minWidth: '150px',
              marginRight: '10px',
              scrollSnapAlign: 'center'
            }
          }}
        >
          <Tabs.List>
            {JOBS.map((job) => (
              <Tabs.Tab key={job.workplace} value={job.workplace}>
                {job.workplace}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {JOBS.map((job) => (
            <Tabs.Panel key={job.workplace} value={job.workplace}>
              <Flex direction='column' rowGap='xs'>
                <Title order={3}>
                  {job.position} @{' '}
                  <Anchor
                    href={job.url}
                    styles={{
                      root: { fontSize: 'var(--mantine-h3-font-size)' }
                    }}
                  >
                    {job.workplace}
                  </Anchor>
                </Title>
                <Box>
                  {job.duration.map((duration) => (
                    <Text key={duration}>{duration}</Text>
                  ))}
                </Box>
                <List>
                  {job.description.map((desc) => (
                    <List.Item key={desc}>{desc}</List.Item>
                  ))}
                </List>
              </Flex>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Box>
    </SectionContainer>
  )
}
