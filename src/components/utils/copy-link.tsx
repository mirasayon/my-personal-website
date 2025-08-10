"use client";
import React, { JSX, useEffect, useState } from "react";
import { Clipboard, Check, Link2 } from "lucide-react";
import { useCopyToClipboard } from "react-use";
const _sizes = ["sm", "md", "lg"];
type _sizes = ["sm", "md", "lg"];
type CopyLinkButtonProps = {
    /** The text (link) to copy */
    text: string;
    /** Accessible label for the button */
    ariaLabel?: string;
    /** Optional small/medium/large sizes */
    size?: _sizes[number];
    /** Extra tailwind classes for the button */
    className?: string;
};
const sizes: { [key in _sizes[number]]: string } = {
    sm: "px-2 py-1 text-sm gap-1",
    md: "px-3 py-1.5 text-sm gap-2",
    lg: "px-4 py-2 text-base gap-2",
};

export function CopyLinkButton({
    text,
    ariaLabel = "Copy link",
    size = "md",
    className = "",
}: CopyLinkButtonProps): JSX.Element {
    const [copied, setCopied] = useState(false);
    const [state, _copyToClipboard] = useCopyToClipboard();

    useEffect(() => {
        if (!copied) {
            return;
        }
        const id = setTimeout(() => setCopied(false), 3000);
        return () => clearTimeout(id);
    }, [copied]);

    const copyToClipboard = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        _copyToClipboard(text);
        return setCopied(true);
    };

    return (
        <button
            type="button"
            onClick={copyToClipboard}
            aria-label={ariaLabel}
            className={`cursor-pointer inline-flex items-center rounded-md  ${
                copied ? "bg-emerald-950" : "bg-blue-950"
            } text-gray-200  ${sizes[size]} ${className}`}
        >
            <div className="mr-1 hidden sm:inline-flex">
                <Link2 size={16} />
            </div>

            <div className="inline-flex items-center">
                {copied ? <Check size={16} /> : <Clipboard size={16} />}
            </div>
        </button>
    );
}
