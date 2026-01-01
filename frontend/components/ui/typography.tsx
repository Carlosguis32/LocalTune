import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ITypography {
	children?: ReactNode;
	className?: string;
}

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

export function P({ children, className }: ITypography) {
	return <p className={cn('leading-7 text-white', className)}>{children}</p>;
}

export function Small({ children, className }: ITypography) {
	return <small className={cn('text-xs font-bold text-muted-foreground', className)}>{children}</small>;
}
