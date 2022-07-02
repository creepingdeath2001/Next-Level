import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SideBarRoute
} from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					{/* //jump to link */}
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="discover" onClick={toggle}>
						Discover
					</SidebarLink> 
					<SidebarLink to="signup" onClick={toggle}>
						Signup
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SideBarRoute to="/signin"> Sign In</SideBarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
