import { NavLink } from '@/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { HEADER_LINKS } from '../model/constants/HEADER';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
    return (
        <header className="py-2 shadow-sm">
            <nav className="container mx-auto flex items-center justify-between px-1">
                <Link
                    className="group flex items-center gap-2 font-medium"
                    href="/"
                >
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <p className="hidden sm:flex sm:flex-col">
                        Amazing Workspace
                        <span className="group-hover:text-primary transition-colors duration-150 ease-in-out">
                            Todo Board
                        </span>
                    </p>
                </Link>

                <ul className="hidden md:flex md:items-center md:gap-2 md:font-medium xl:gap-4">
                    {HEADER_LINKS.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <NavLink
                                    href={link.href}
                                    alias={link.label}
                                />
                            </li>
                        );
                    })}
                </ul>

                <ul className="flex items-center gap-4">
                    <li>
                        <Link
                            href="/signin"
                            className="bg-primary rounded-md px-4 py-2 font-medium text-white"
                        >
                            Sign In
                        </Link>
                    </li>
                    <li className="md:hidden">
                        <BurgerMenu />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
