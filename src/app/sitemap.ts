import { AppConfig } from "#/constants/app";
import type { MetadataRoute } from "next";

export default function __sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: AppConfig.full_url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
