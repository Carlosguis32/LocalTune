import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ITypography {
	children?: ReactNode;
	className?: string;
}

export const display1Class = 'text-center text-6xl font-black text-balance text-white';
export const display2Class = 'text-center text-5xl font-extrabold text-balance text-white';
export const display3Class = 'text-center text-4xl font-extrabold text-balance text-white';
export const h1Class = 'text-center text-3xl font-extrabold text-balance text-white';
export const h2Class = 'text-2xl font-semibold tracking-tight text-white';
export const h3Class = 'text-xl font-semibold tracking-tight text-white';
export const h4Class = 'text-lg font-semibold tracking-tight text-white';
export const h5Class = 'text-base font-semibold tracking-tight text-white';
export const h6Class = 'text-sm font-semibold tracking-tight text-white';
export const pClass = 'text-sm text-white';
export const smallClass = 'text-xs text-muted-foreground';

export function Display1({ children, className }: ITypography) {
	return <h1 className={cn(display1Class, className)}>{children}</h1>;
}

export function Display2({ children, className }: ITypography) {
	return <h1 className={cn(display2Class, className)}>{children}</h1>;
}

export function Display3({ children, className }: ITypography) {
	return <h1 className={cn(display3Class, className)}>{children}</h1>;
}

export function H1({ children, className }: ITypography) {
	return <h1 className={cn(h1Class, className)}>{children}</h1>;
}

export function H2({ children, className }: ITypography) {
	return <h2 className={cn(h2Class, className)}>{children}</h2>;
}

export function H3({ children, className }: ITypography) {
	return <h3 className={cn(h3Class, className)}>{children}</h3>;
}

export function H4({ children, className }: ITypography) {
	return <h4 className={cn(h4Class, className)}>{children}</h4>;
}

export function H5({ children, className }: ITypography) {
	return <h5 className={cn(h5Class, className)}>{children}</h5>;
}

export function H6({ children, className }: ITypography) {
	return <h6 className={cn(h6Class, className)}>{children}</h6>;
}

export function P({ children, className }: ITypography) {
	return <p className={cn(pClass, className)}>{children}</p>;
}

export function Small({ children, className }: ITypography) {
	return <small className={cn(smallClass, className)}>{children}</small>;
}
