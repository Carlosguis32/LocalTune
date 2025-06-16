import { useState } from 'react';
import { SliderComponentProps } from '../Types';
import { Slider } from './ui/slider';

function SliderComponent({
	currentTime,
	duration,
	onSeek,
}: SliderComponentProps) {
	const [isDragging, setIsDragging] = useState(false);
	const [dragValue, setDragValue] = useState(currentTime);

	return (
		<Slider
			className="SliderRoot"
			value={[isDragging ? dragValue : currentTime]}
			max={duration}
			step={1}
			onValueChange={(value) => {
				setIsDragging(true);
				setDragValue(value[0]);
			}}
			onPointerDown={() => setIsDragging(true)}
			onPointerUp={() => {
				setIsDragging(false);
				onSeek(dragValue);
			}}
		/>
	);
}

export default SliderComponent;
