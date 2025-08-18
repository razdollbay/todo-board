'use client';

import {
    Button,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    NavLink,
} from '@/shared/ui';
import { MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { HEADER_LINKS } from '../model/constants/HEADER';

export const BurgerMenu = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Button
                onClick={() => setOpen((prev) => !prev)}
                variant="outline"
                size="icon"
            >
                <MenuIcon />
            </Button>

            <Drawer
                direction="right"
                open={isOpen}
                onOpenChange={setOpen}
            >
                <DrawerHeader className="sr-only">
                    <DrawerTitle>Menu</DrawerTitle>
                    <DrawerDescription>
                        Navigation links
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerContent>
                    <DrawerClose asChild>
                        <div className="flex justify-end px-1 py-2">
                            <Button
                                onClick={() =>
                                    setOpen(false)
                                }
                                variant="outline"
                                size="icon"
                            >
                                <X />
                            </Button>
                        </div>
                    </DrawerClose>
                    <ul className="flex h-screen flex-col items-center justify-center gap-4">
                        {HEADER_LINKS.map((link) => {
                            return (
                                <li key={link.href}>
                                    <NavLink
                                        href={link.href}
                                        alias={link.label}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </DrawerContent>
            </Drawer>
        </>
    );
};
