import Link from "next/link";
type LinkerProps = {
    href: string;
    type: "site" | "mail" | "raw";
    className?: string;
    children: React.ReactNode;
    defaultStyles?: boolean | undefined;
};
export function Linker({
    href,
    type,
    children,
    className = "",
    defaultStyles = true,
}: LinkerProps) {
    if (defaultStyles) {
        className +=
            " text-blue-800 hover:text-violet-800 dark:text-blue-500 dark:hover:text-violet-500";
    }
    if (type === "mail") {
        return (
            <Link className={className} href={`mailto:${href}`}>
                {children}
            </Link>
        );
    }
    if (type === "site") {
        return (
            <Link className={className} href={`https://${href}`}>
                {children}
            </Link>
        );
    }
    if (type === "raw") {
        return (
            <Link className={className} href={href}>
                {children}
            </Link>
        );
    }
    throw new TypeError("Invalid type attribute: " + type);
}
