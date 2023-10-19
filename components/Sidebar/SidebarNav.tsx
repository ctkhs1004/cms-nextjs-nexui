"use client"
import {IconDefinition, faGauge} from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem";
import {Accordion, AccordionContext, Badge, Button, Nav, useAccordionButton,} from 'react-bootstrap';
import {PropsWithChildren, useEffect, useState} from "react";
import HeaderSignOut from "../Header/HeaderSignOut";
import {Avatar} from "@nextui-org/react";
import getCurrentUser from "@/utils/getCurrentUser";
import {UserData} from "@/types";

const SidebarNavTitle = (props: PropsWithChildren) => {
    const {children} = props
    return (
        <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
    )
}

const SidebarNavGroup = (props: PropsWithChildren) => {
    const {
        children,
    } = props

    const [isShow, setIsShow] = useState(false)

    return (
        <Accordion as="li" bsPrefix="nav-group">
            <Accordion.Collapse eventKey="0">
                <ul className="nav-group-items list-unstyled">
                    {children}
                </ul>
            </Accordion.Collapse>
        </Accordion>
    )
}
const SidebarNav =  () => {
    return (
        <>
            <nav className="mt-4 flex flex-col justify-between">
                <ul role="list" className="flex flex-col space-y-1">
                    <SidebarItem icon={faGauge} href="/">
                        Home
                        <small className="ms-auto"><Badge bg="info" className="ms-auto"></Badge></small>
                    </SidebarItem>
                    <SidebarItem icon={faGauge} href="/">
                        Contents
                        <small className="ms-auto"><Badge bg="info" className="ms-auto"></Badge></small>
                    </SidebarItem>
                    <SidebarNavTitle>
                        setting
                    </SidebarNavTitle>
                    <SidebarNavGroup>
                        <SidebarItem icon={faGauge} href="/">
                            Contents
                        </SidebarItem>
                    </SidebarNavGroup>
                </ul>
            </nav>
            <nav>
               
            </nav>
            <nav>
                <HeaderSignOut/>
            </nav>
        </>
    )
}
export default SidebarNav;