import { jsxChildren } from "#/types/next";
import Link from "next/link";
type Props = {
    href: string;
    type: "site" | "mail" | "raw";
    className?: string;
    // nextModule?: boolean;
} & jsxChildren;
export function Linker({ href, type, children, className = "" }: Props) {
    if (type === "mail") {
        return (
            <>
                <Link className={className} href={`mailto:${href}`}>
                    {children}
                </Link>
            </>
        );
    }

    if (type === "site") {
        return (
            <>
                <Link className={className} href={`https://${href}`}>
                    {children}
                </Link>
            </>
        );
    }
    if (type === "raw") {
        return (
            <>
                <Link className={className} href={href}>
                    {children}
                </Link>
            </>
        );
    }
    throw new Error("Invalid type attribute");
}
