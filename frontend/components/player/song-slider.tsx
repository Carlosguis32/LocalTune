import { SliderComponentProps } from '@/types';
import { useState } from 'react';
import { Slider } from '../ui/slider';

export function SliderComponent({ currentTime, duration, onSeek }: SliderComponentProps) {
	const [dragValue, setDragValue] = useState<number | null>(null);

	return (
		<Slider
			className="SliderRoot"
			value={[dragValue !== null ? dragValue : currentTime]}
			max={duration}
			step={1}
			onValueChange={(value) => {
				setDragValue(value[0]);
			}}
			onValueCommit={(value) => {
				setDragValue(null);
				onSeek(value[0]);
			}}
		/>
	);
}
