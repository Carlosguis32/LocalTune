import { AppSidebar } from '@/components/app-sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarProvider } from '@/components/ui/sidebar';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

function Settings() {
	function addTableRow() {
		return (
			<TableRow>
				<TableCell className="font-medium">INV001</TableCell>
				<TableCell>Paid</TableCell>
				<TableCell>Credit Card</TableCell>
				<TableCell className="text-right">$250.00</TableCell>
			</TableRow>
		);
	}

	return (
		<div>
			<SidebarProvider>
				<AppSidebar />

				<Input
					type="text"
					placeholder="Input a directory path with audio files"
				/>

				<Button>Add path</Button>

				<Table>
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Invoice</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Method</TableHead>
							<TableHead className="text-right">Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">
								INV001
							</TableCell>
							<TableCell>Paid</TableCell>
							<TableCell>Credit Card</TableCell>
							<TableCell className="text-right">
								$250.00
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</SidebarProvider>
		</div>
	);
}

export default Settings;
