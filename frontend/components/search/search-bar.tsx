import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
	placeholder?: string;
	onSearch?: (query: string) => void;
}

export function SearchBar({ placeholder = 'Play something...', onSearch }: SearchBarProps) {
	const [query, setQuery] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		if (onSearch) {
			onSearch(e.target.value);
		}
	};

	return (
		<div className="w-full max-w-md mx-auto relative">
			<span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
				<Search className="w-5 h-5" />
			</span>

			<Input
				type="text"
				value={query}
				onChange={handleInputChange}
				placeholder={placeholder}
				className="pl-10 py-2"
			/>
		</div>
	);
}
