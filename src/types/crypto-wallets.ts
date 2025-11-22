/** Crypto Currencies Type */
export type CryptoCurrencies = "BTC" | "ETH" | "USDT_TRC20" | "USDT_TON";
export interface walletType {
    /** Address string */
    address: string;
    /** URL to QR code */
    qr: string;
    /** Network type */
    network?: string;
    /** Codename of currency */
    name: string;
    /** Normalized name of currency */
    normal_name: string;
}
