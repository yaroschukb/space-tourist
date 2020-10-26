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
                    <SidebarLink to="outside window">
                        Outside window
                    </SidebarLink>
                    <SidebarLink to="under your fit">
                        Under your fit
                    </SidebarLink>
                    <SidebarLink to="rocket">
                        Rocket
                    </SidebarLink>
                    <SidebarLink to="discover">
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