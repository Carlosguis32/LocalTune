import NextImage, { ImageProps } from 'next/image';

const PLACEHOLDER_SRC = '/placeholder.webp';

export function Image({ src, ...props }: ImageProps) {
	return <NextImage src={src || PLACEHOLDER_SRC} {...props} />;
}
