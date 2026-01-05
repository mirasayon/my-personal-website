import type { CryptoCurrencies, WalletType } from "#/types/crypto-wallets";
type SocialLinksType = {
    name: string;
    link: string;
    icon_path: string;
    link_render_name: string;
}[];
export const LINKS_SOCIAL: SocialLinksType = [
    {
        name: "mail",
        icon_path: "/_assets/icons/mail.png",
        link: "mailto:mirasayon@ya.ru",
        link_render_name: "mirasayon@ya.ru",
    },
    {
        name: "twitter",
        icon_path: "/_assets/icons/x_icon.png",
        link: "https://x.com/mirasayon",
        link_render_name: "@mirasayon",
    },
    {
        name: "github",
        link: "https://github.com/mirasayon",
        icon_path: "/_assets/icons/github_icon.png",
        link_render_name: "/mirasayon",
    },
    {
        name: "telegram",
        link: "https://t.me/mirasayon",
        link_render_name: "@mirasayon",
        icon_path: "/_assets/icons/telegram-icon.png",
    },
];
export const WALLETS: { [key in CryptoCurrencies]: WalletType } = {
    BTC: {
        address: "17dYRDZ5UM2F5Xif1KNh9KuEXmLpMbZA1Y",
        qr: "/qr/btc.png",
        name: "BTC",
        normal_name: "Bitcoin",
    },
    ETH: {
        address: "0xf8f4969b4dc13b87ec4a3d9212eb8d17d059dc65",
        qr: "/qr/eth.png",
        name: "ETH",
        normal_name: "Ethereum",
    },
    USDT_TRC20: {
        address: "THfZnRN3m9AADAYsmdJjcf624UqyF1HLXi",
        network: "TRC20",
        name: "USDT",
        qr: "/qr/usdt_trc20.png",
        normal_name: "Tether USDT (TRC20 Network)",
    },
    USDT_TON: {
        address: "UQCFDoPjpEpbdWxwBVUOIr1aoUlcCOQFsT9AHZtoVdlY6hp8",
        network: "TON",
        name: "USDT",
        qr: "/qr/usdt_ton.png",
        normal_name: "Tether USDT (TON Network)",
    },
};
export const WALLET_TYPES = [
    "BTC",
    "ETH",
    "USDT_TRC20",
    "USDT_TON",
] as CryptoCurrencies[];
