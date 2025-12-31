'use client';

import { Command, Home, LifeBuoy, PlayCircle, Send, Settings } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { NavMain } from '@/components/sidebar/nav-main';
import { NavSecondary } from '@/components/sidebar/nav-secondary';
import { NavUser } from '@/components/sidebar/nav-user';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
	user: {
		name: 'User',
		email: 'm@example.com',
		//avatar: '/avatars/shadcn.jpg',
	},
	navMain: [
		{
			title: 'Home',
			url: '/',
			icon: Home,
			isActive: true,
		},
		{
			title: 'Settings',
			url: '/settings',
			icon: Settings,
		},
		{
			title: 'Player',
			url: '/player',
			icon: PlayCircle,
		},
	],
	navSecondary: [
		{
			title: 'Support',
			url: '#',
			icon: LifeBuoy,
		},
		{
			title: 'Feedback',
			url: '#',
			icon: Send,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link href="/">
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Melira</span>
									<span className="truncate text-xs">Music</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
