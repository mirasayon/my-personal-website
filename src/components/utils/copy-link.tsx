"use client";
import { type JSX, useEffect, useState } from "react";
import { Clipboard, Check } from "lucide-react";
import { useCopyToClipboard } from "react-use";
const _sizes = ["sm", "md", "lg"] as const;
type Sizes = (typeof _sizes)[number];
type CopyLinkButtonProps = {
    text: string;
    ariaLabel?: string;
    size?: Sizes;
    className?: string;
};
const sizes: { [key in Sizes]: string } = {
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
    const [state, copyToClipboard] = useCopyToClipboard();

    useEffect(() => {
        if (!copied) {
            return;
        }
        const id = setTimeout(() => setCopied(false), 3000);
        return () => clearTimeout(id);
    }, [copied]);

    const clickHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();
        copyToClipboard(text);
        return setCopied(true);
    };

    return (
        <button
            type="button"
            onClick={clickHandler}
            aria-label={ariaLabel}
            className={`cursor-pointer inline-flex items-center rounded-md  ${
                copied
                    ? "bg-violet-400 dark:bg-violet-800"
                    : "bg-blue-400 dark:bg-blue-950"
            } text-gray-200  ${sizes[size]} ${className}`}
        >
            <div className="inline-flex items-center px-2">
                {copied ? (
                    <>
                        <Check
                            size={16}
                            color={"black"}
                            className="dark:hidden block"
                        />
                        <Check
                            size={16}
                            color={"white"}
                            className="hidden dark:block"
                        />
                    </>
                ) : (
                    <>
                        <Clipboard
                            size={16}
                            color={"black"}
                            className="dark:hidden block"
                        />
                        <Clipboard
                            size={16}
                            color={"white"}
                            className="hidden dark:block"
                        />
                    </>
                )}
            </div>
        </button>
    );
}

