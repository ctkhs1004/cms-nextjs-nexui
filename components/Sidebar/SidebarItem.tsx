"use client"
import Link from 'next/link';
import { Accordion, AccordionContext, Badge, Button, Nav, useAccordionButton, } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PropsWithChildren} from 'react';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type SidebarNavItemProps = {
    href: string;
    icon?: IconDefinition;
} & PropsWithChildren
const SidebarItem = (props: SidebarNavItemProps) => {
    const {
        icon,
        children,
        href,
    } = props

    return (
        <Nav.Item>
            <Link href={href} passHref legacyBehavior>
                <Nav.Link className="px-3 py-2 d-flex align-items-center">
                    {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon}/>
                        : <span className="nav-icon ms-n3"/>}
                    {children}
                </Nav.Link>
            </Link>
        </Nav.Item>
    )
}

export default SidebarItem;