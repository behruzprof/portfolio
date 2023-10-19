import { Anchor } from '@mantine/core'

import { LINKS } from './constants'
import { Fragment, FunctionComponent, ReactNode } from 'react'

interface LinksProps {
    Overlay: FunctionComponent
}

export const Links = ({ Overlay }: LinksProps) => {
    const Wrapper: FunctionComponent<{ key: string, children: ReactNode }> = Overlay || Fragment
    return (
        <>
            {LINKS.map(link => (
                <Wrapper key={link}>
                    <Anchor key={link} children={link} />
                </Wrapper>
            ))}
        </>
    )
}
