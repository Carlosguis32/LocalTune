import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

function Menu() {
	return (
		<div>
			<SidebarProvider>
				<AppSidebar />

				<text>Test</text>
			</SidebarProvider>
		</div>
	);
}

export default Menu;
