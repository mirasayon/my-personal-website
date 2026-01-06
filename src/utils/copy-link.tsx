"use client";
import { type JSX, useEffect, useState } from "react";
import { useCopyToClipboard } from "react-use";
type CopyLinkButtonProps = {
    text: string;
    ariaLabel?: string;
};

export function CopyLinkButton({ text }: CopyLinkButtonProps): JSX.Element {
    const [copied, setCopied] = useState(false);
    const [, copyToClipboard] = useCopyToClipboard();

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
        setCopied(true);
    };

    return (
        <button
            type="button"
            onClick={clickHandler}
            aria-label={`Copy ${text} link`}
            className={`cursor-pointer inline-flex items-center rounded-md  ${
                copied
                    ? "bg-violet-400 dark:bg-violet-800"
                    : "bg-violet-400 dark:bg-blue-950"
            } text-gray-200 px-2 py-1 text-sm gap-1`}
        >
            <div className=" items-center px-1 w-8">
                {copied ? (
                    <div>
                        <Check
                            size={iconSizes}
                            color={"black"}
                            className="dark:hidden block"
                        />
                        <Check
                            size={iconSizes}
                            color={"white"}
                            className="hidden dark:block"
                        />
                    </div>
                ) : (
                    <div>
                        <Clipboard
                            size={iconSizes}
                            color={"black"}
                            className="dark:hidden block"
                        />
                        <Clipboard
                            size={iconSizes}
                            color={"white"}
                            className="hidden dark:block"
                        />
                    </div>
                )}
            </div>
        </button>
    );
}
const iconSizes = "7px";
type IconProps = {
    className: string;
    size: string;
    color: "white" | "black";
};
function Clipboard({ color, className = "", size }: IconProps) {
    return (
        <img
            src={`/_assets/ui-icons/${color}-clipboard.svg`}
            alt="clipboard"
            className={className + ` h-${size} w-${size}`}
        />
    );
}
function Check({ color, className = "", size }: IconProps) {
    return (
        <img
            src={`/_assets/ui-icons/${color}-check.svg`}
            alt="check"
            className={className + ` h-${size} w-${size} `}
        />
    );
}
