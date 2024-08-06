import React from 'react';
import { usePathname } from 'next/navigation';
import { Home, LineChart, Package, Package2, User2, Users } from 'lucide-react';
import NavItem from './nav-item';
const navigationItems = [
    {
        name: 'Trang chủ',
        icon: Home,
        href: '/',
    },
    {
        name: 'Sản phẩm',
        icon: Package2,
        href: '/products',
    },
    {
        name: 'Danh mục',
        icon: Package,
        href: '/categories',
    },
    {
        name: 'Bộ sưu tập',
        icon: Package,
        href: '/collections',
    },
    {
        name: 'Đối tác',
        icon: User2,
        href: '/partners',
    },
];
const Navigation = () => {
    const params = usePathname();
    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navigationItems.map((nav, index) => (
                <NavItem key={index} isOn={params === nav.href} href={nav.href}>
                    <nav.icon className="h-4 w-4" />
                    {nav.name}
                </NavItem>
            ))}
        </nav>
    );
};

export default Navigation;
