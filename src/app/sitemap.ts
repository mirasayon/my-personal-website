import { full_url } from "#/constants/base";
import type { MetadataRoute } from "next";

export default function __sitemapGen(): MetadataRoute.Sitemap {
    return [
        {
            url: full_url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: full_url + "/buy-me-ramen",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}
