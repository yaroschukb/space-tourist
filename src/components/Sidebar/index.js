import React from 'react';
import {
    SidebarComponent,
    Icon,
    CloseIcon,
    SidebarWrapper,
    Sidebarmenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarComponent isOpen={isOpen} onClick={toggle} >
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <Sidebarmenu>
                    <SidebarLink to="outside window" onClick={toggle}>
                        Outside window
                    </SidebarLink>
                    <SidebarLink to="under your fit" onClick={toggle}>
                        Under your fit
                    </SidebarLink>
                    <SidebarLink to="rocket" onClick={toggle}>
                        Rocket
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                </Sidebarmenu>
                    <SideBtnWrap>
                        <SidebarRoute to="signin">Sign In</SidebarRoute>
                    </SideBtnWrap>
            </SidebarWrapper>
        </SidebarComponent>
    );
};

export default Sidebar;