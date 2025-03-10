import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	IconHome,
	IconPlayerPlay,
	IconPlaylist,
	IconSettings,
} from '@tabler/icons-react';
import { NavUser } from '@/components/nav-user';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';

const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	navMain: [
		{
			title: 'Player',
			url: 'player',
			icon: IconPlayerPlay,
			isActive: false,
		},
		{
			title: 'Playlists',
			url: 'playlists',
			icon: IconPlaylist,
			isActive: true,
		},
		{
			title: 'Settings',
			url: 'settings',
			icon: IconSettings,
			isActive: true,
		},
		{
			title: 'Artists',
			url: 'artists',
			icon: IconPlaylist,
			isActive: true,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const [currentPage, setCurrentPage] = React.useState<string>('Player');
	const { setOpen } = useSidebar();
	const navigate = useNavigate();
	const location = useLocation();

	const getCurrentPage = React.useCallback(() => {
		const path = location.pathname.substring(1) || 'player';
		const navItem = data.navMain.find((item) => item.url === path);
		return navItem ? navItem.title : 'Player';
	}, [location.pathname]);

	const handleNavigation = (item: (typeof data.navMain)[0]) => {
		setCurrentPage(item.title);
		setOpen(true);
		navigate(`/${item.url}`);
	};

	React.useEffect(() => {
		setCurrentPage(getCurrentPage());
	}, [getCurrentPage, location]);

	return (
		<Sidebar
			collapsible="icon"
			className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							asChild
							className="md:h-8 md:p-0"
						>
							<a href="/">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<IconHome className="size-4" />
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent className="px-1.5 md:px-0">
						<SidebarMenu>
							{data.navMain.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton
										onClick={() => {
											handleNavigation(item);
										}}
										tooltip={{
											children: item.title,
											hidden: false,
										}}
										isActive={currentPage === item.title}
										className="px-2.5 md:px-2"
									>
										<item.icon />
										<span>{item.title}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
