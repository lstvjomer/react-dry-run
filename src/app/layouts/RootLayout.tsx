import { Outlet, Link } from "react-router";

const RootLayout = () => {
    const LINKS = [
        {
            label: "Add User",
            href: "/users/add",
        },
        {
            label: "Write",
            href: "/posts/write",
        },
        {
            label: "Posts",
            href: "/posts",
        },
        {
            label: "Users",
            href: "/users",
        },
    ];

    return (
        <>
            <nav className="container mx-auto px-4 flex items-center justify-between gap-2 py-4">
                <h2 className="font-semibold">
                    <Link to="/">Lstv Training</Link>
                </h2>
                <ul className="flex items-center gap-4">
                    {LINKS.map((item) => (
                        <li key={item.href}>
                            <Link to={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default RootLayout;
