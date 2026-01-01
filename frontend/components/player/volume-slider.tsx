import { useState } from 'react';
import { Slider } from '../ui/slider';

interface VolumeSliderProps {
	volume: number;
	onVolumeChange: (value: number) => void;
}

export function VolumeSlider({ volume, onVolumeChange }: VolumeSliderProps) {
	const [isDragging, setIsDragging] = useState(false);
	const [dragValue, setDragValue] = useState(volume);

	return (
		<Slider
			className="w-20"
			value={[isDragging ? dragValue : volume]}
			max={1}
			min={0}
			step={0.01}
			onValueChange={(value) => {
				const newVolume = value[0];
				setDragValue(newVolume);
				onVolumeChange(newVolume);
			}}
			onPointerDown={() => setIsDragging(true)}
			onPointerUp={() => {
				setIsDragging(false);
			}}
		/>
	);
}
