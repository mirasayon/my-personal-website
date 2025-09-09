"use client";
import { walletList, wallets } from "#/constants/links";
import type { CryptoCurrecies } from "#/types/crypto-wallets";
import { useState } from "react";
import { useCopyToClipboard } from "react-use";

export function SupportMe() {
    const [selected, set_selected] = useState<CryptoCurrecies>("BTC");
    const { address, qr, name, network } = wallets[selected];
    const [copiedText, setCopiedText] = useState(false);
    const [, copyToClipboard] = useCopyToClipboard();
    const _name = name + (network ? ` (${network})` : "");
    return (
        <div className="">
            <div className="p-6 max-w-md  bg-slate-200 text-slate-900 dark:text-violet-100 dark:bg-neutral-900 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Support Me
                </h2>
                <div className="pb-4">
                    <span>
                        If you enjoy what I do and want to support my work -
                        feel free to send a tip. Every bit helps 🙏
                    </span>
                </div>

                <div className="flex justify-center mb-4 space-x-3">
                    {walletList.map((currency) => (
                        <div key={currency}>
                            <button
                                key={currency}
                                className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${
                                    selected === currency
                                        ? "bg-blue-600 text-white"
                                        : "bg-slate-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCopiedText(false);
                                    set_selected(currency);
                                }}
                            >
                                {wallets[currency].name}
                                {wallets[currency]?.network &&
                                    `(${wallets[currency]?.network})`}
                            </button>
                        </div>
                    ))}
                </div>
                <div className=" text-center pb-4">
                    {wallets[selected].normal_name}
                </div>
                <img
                    src={qr}
                    alt={`${selected} QR`}
                    className="mx-auto w-40 h-40 mb-4"
                />
                <div className="bg-gray-300 dark:bg-gray-800 p-3  text-black dark:text-slate-400 rounded-md text-sm break-all text-center">
                    {address}
                </div>
                <button
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard(address);
                        return setCopiedText(true);
                    }}
                    className={`
                        mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition cursor-pointer
                         ${copiedText && "bg-violet-700 hover:bg-violet-800"} `}
                >
                    {copiedText
                        ? `${_name} address copied. Thank You❤️`
                        : `Copy ${_name} Address`}
                </button>
            </div>
        </div>
    );
}

