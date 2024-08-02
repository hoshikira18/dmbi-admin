import Link from 'next/link';

const NavItem = ({ children, isOn, href = '#' }) => {
    return (
        <Link
            href={href}
            className={`${isOn ? 'bg-muted text-primary' : 'text-muted-foreground'} flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary`}
        >
            {children}
        </Link>
    );
};

export default NavItem;
