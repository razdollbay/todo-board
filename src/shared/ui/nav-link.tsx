'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface Props extends LinkProps {
    alias: string;
    className?: string;
}

export const NavLink = ({
    alias,
    href,
    className,
    ...props
}: Props) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={` ${pathname === href ? 'text-primary font-bold' : 'hover:text-primary transition-colors duration-200 ease-in-out'} ${className}`}
            {...props}
        >
            {alias}
        </Link>
    );
};
