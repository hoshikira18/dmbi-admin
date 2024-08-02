import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LineChart, Package, Package2, Users } from 'lucide-react';
import NavItem from './nav-item';

const Navigation = () => {
    const params = usePathname();
    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <NavItem isOn={params === '/'} href="/">
                <Home className="h-4 w-4" />
                Trang chủ
            </NavItem>
            <NavItem isOn={params === '/products'} href="/products">
                <Package2 className="h-4 w-4" />
                Sản phẩm
            </NavItem>
            <NavItem isOn={params === '/categories'} href="/categories">
                <Package className="h-4 w-4" />
                Danh mục
            </NavItem>
        </nav>
    );
};

export default Navigation;
