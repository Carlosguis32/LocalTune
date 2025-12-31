import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ITypography {
	children?: ReactNode;
	className?: string;
}

// Headings
export function H1({ children, className }: ITypography) {
	return (
		<h1
			className={cn(
				'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-white',
				className
			)}
		>
			{children}
		</h1>
	);
}

export function H2({ children, className }: ITypography) {
	return (
		<h2 className={cn('scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-white', className)}>
			{children}
		</h2>
	);
}

export function H3({ children, className }: ITypography) {
	return (
		<h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight text-white', className)}>{children}</h3>
	);
}

export function H4({ children, className }: ITypography) {
	return <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight text-white', className)}>{children}</h4>;
}

export function H5({ children, className }: ITypography) {
	return <h5 className={cn('scroll-m-20 text-lg font-semibold tracking-tight text-white', className)}>{children}</h5>;
}

export function H6({ children, className }: ITypography) {
	return (
		<h6 className={cn('scroll-m-20 text-base font-semibold tracking-tight text-white', className)}>{children}</h6>
	);
}

// Paragraphs and text
export function P({ children, className }: ITypography) {
	return <p className={cn('leading-7 text-white', className)}>{children}</p>;
}

export function Lead({ children, className }: ITypography) {
	return <p className={cn('text-xl text-muted-foreground', className)}>{children}</p>;
}

export function Subtitle({ children, className }: ITypography) {
	return <p className={cn('text-lg text-muted-foreground', className)}>{children}</p>;
}

// Block elements
export function Blockquote({ children, className }: ITypography) {
	return <blockquote className={cn('mt-6 border-l-2 pl-6 italic text-white', className)}>{children}</blockquote>;
}

export function List({ children, className }: ITypography) {
	return <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2 text-white', className)}>{children}</ul>;
}

// Inline and utility
export function InlineCode({ children, className }: ITypography) {
	return (
		<code
			className={cn(
				'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-white',
				className
			)}
		>
			{children}
		</code>
	);
}

export function Muted({ children, className }: ITypography) {
	return <p className={cn('text-muted-foreground text-sm', className)}>{children}</p>;
}

export function Small({ children, className }: ITypography) {
	return <small className={cn('text-xs text-muted-foreground', className)}>{children}</small>;
}

export function Caption({ children, className }: ITypography) {
	return <span className={cn('text-[0.75rem] text-muted-foreground', className)}>{children}</span>;
}

export function Overline({ children, className }: ITypography) {
	return (
		<span className={cn('uppercase tracking-widest text-[0.7rem] text-muted-foreground', className)}>
			{children}
		</span>
	);
}
