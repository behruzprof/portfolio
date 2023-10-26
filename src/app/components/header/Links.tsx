import { FunctionComponent, Fragment, ReactNode } from 'react';
import { Anchor } from '@mantine/core'
import { Link as ScrollLink } from "react-scroll";

import { LINKS } from './constants'

interface LinksProps {
    Overlay?: FunctionComponent
}

export const Links = ({ Overlay }: LinksProps) => {
    const Wrapper: FunctionComponent<{ key: string, children: ReactNode }> = Overlay || Fragment


    return (
        <>
            {LINKS.map(link => (
                <Wrapper key={link.label}>
                    <Anchor to={link.to} component={ScrollLink}
                        spy
                        smooth
                        offset={-70}
                        duration={500} children={link.label} />
                </Wrapper>
            ))}
        </>
    )
}
