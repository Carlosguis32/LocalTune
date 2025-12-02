import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function Settings() {
	return (
		<main className="flex p-4 w-full">
			<FieldSet className="w-full">
				<FieldLegend>Music settings</FieldLegend>
				<FieldDescription>Input your preferences for your music</FieldDescription>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="name">Full path to the folder with your music</FieldLabel>
						<Input id="name" autoComplete="off" placeholder="C:\Users\User\Music" />
					</Field>
				</FieldGroup>
			</FieldSet>
		</main>
	);
}
