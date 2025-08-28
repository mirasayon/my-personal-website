import type { TJsxChildren } from "#/types/next";
import Link from "next/link";
type Props = {
    href: string;
    type: "site" | "mail" | "raw";
    className?: string;
} & TJsxChildren;
export function Linker({ href, type, children, className = "" }: Props) {
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
    throw new TypeError("Invalid type attribute");
}

