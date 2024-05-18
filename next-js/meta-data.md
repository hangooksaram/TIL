# Metadata

[Metadata file api](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)

# sitemap

- .xml 파일로 정적으로 생성할 수있고, 아래와 같이 sitemap.(js|ts) 파일 컨벤션을 통해 코드로 생성할 수 있다. sitemap() 함수는 SiteMap 타입을 반환한다.

## type SiteMap

- `changeFrequency` 와 `priority` 속성은 `v13.4.5` 이상 부터 지원됨.

```ts
type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  alternates?: {
    languages?: Languages<string>;
  };
}>;
```

```ts
// /app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es",
          de: "https://acme.com/de",
        },
      },
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es/about",
          de: "https://acme.com/de/about",
        },
      },
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://acme.com/es/blog",
          de: "https://acme.com/de/blog",
        },
      },
    },
  ];
}
```

# robots

```ts
// /app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://acme.com/sitemap.xml",
  };
}
```

#
