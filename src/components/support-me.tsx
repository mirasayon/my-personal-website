"use client";
import {
    WALLET_TYPES,
    WALLETS,
    type CryptoCurrencies,
} from "#/constants/links";
import { CopyLinkButton } from "#/utils/copy-link";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function SupportMeComponent() {
    let selectedType = useSearchParams().get("currency") as CryptoCurrencies;
    if (!WALLET_TYPES.includes(selectedType)) {
        selectedType = "BTC";
    }
    return (
        <div className="flex flex-col pt-10 items-center  justify-center ">
            <div className="flex-col flex items-center p-4 max-w-120  bg-slate-200 dark:bg-neutral-900 rounded-lg">
                <span>
                    If you enjoy my work, feel free to support it. Thank you!
                </span>

                <div className="flex justify-center p-2 gap-2">
                    {WALLET_TYPES.map((c) => (
                        <Link
                            href={`?currency=${c}`}
                            key={c}
                            className={`px-2 py-1 rounded-lg cursor-pointer ${
                                selectedType === c
                                    ? "dark:bg-violet-600 bg-violet-400"
                                    : "bg-slate-300 dark:bg-gray-700"
                            }`}
                        >
                            {WALLETS[c].shortName}
                        </Link>
                    ))}
                </div>
                <p className="p-2">{WALLETS[selectedType].name}</p>
                <img
                    src={WALLETS[selectedType].qr}
                    alt={`${selectedType} QR`}
                    className="w-45 h-45 m-2 rounded-lg"
                />
                <CopyLinkButton text={WALLETS[selectedType].address} />
                <span className="bg-gray-300 dark:bg-gray-800 p-3 rounded-md text-sm">
                    {WALLETS[selectedType].address}
                </span>
            </div>
        </div>
    );
}
