# Next.js

#### Summary (final)

**Next.js Rendering Strategies**

**Static Rendering:** HTML is generated at build time or during background revalidation. The output is fully cached and reused across requests.

**Dynamic Rendering:** HTML is generated at request time when the route depends on request-specific data (e.g., cookies, headers, search params), so it can't be fully cached.

<hr />

| Feature / Aspect | **React.js**                                                | **Next.js**                                                          |
| ---------------- | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| Type             | UI library                                                  | Full-stack framework built on React                                  |
| Routing          | Not built-in (requires React Router)                        | Built-in (App Router) routing                                        |
| Rendering        | Primarily client-side rendering (CSR)                       | Server-side rendering (SSR), static generation, and hybrid rendering |
| Performance      | Slower First Contentful Paint due to CSR                    | Faster performance with SSR/SSG and optimizations                    |
| SEO              | Less SEO-friendly (content not immediately visible to bots) | More SEO-friendly due to SSR and pre-rendering                       |

```js
npm run build

Route (app)
┌ ○ /
├ ○ /_not-found
├ ƒ /api/users
├ ƒ /api/users/[id]
├ ○ /users
├ ƒ /users/[id]/edit
└ ○ /users/new

○: Indicates a Statically Generated (SSG) page(default).
ƒ: Client-side rendering only.
```

## Server component vs Client component

- The default is a server component.
- `use client` => a client component.
- A Server Component - Fetch data from DB or API
- A Server Component - Reduce the amount of JavaScript sent to the browser.
- A Client Component - useState, useEffect, event handlers (onClick, onChange), Custom hooks.

<hr />

## My Note

- [12/10/2025]
- https://nextjs.org/
- https://nextjs.org/docs/app/getting-started/installation
- https://nextjs.org/docs/app/getting-started/project-structure
- https://nextjs.org/docs/app/getting-started/project-structure#routing-files
- https://nextjs.org/docs/app/getting-started/server-and-client-components
- https://nextjs.org/docs/app/guides/caching#rendering-strategies

## React.js vs Next.js

- React.js is a JS library for buliding UI, while Next.js a full-stack framework on top of React.
- Next.js - built-in routing, server-side rendering(SSR), performance optimizations out of the box.
- Client-side rendering
- slower to firest contentful paint
- Invisible to search BOTS

## Rendering Strategies

To understand how caching works in Next.js, it's helpful to understand the rendering strategies available. The rendering strategy determines when your route's HTML is generated, which directly impacts what can be cached.

**Static Rendering**
With Static Rendering, routes are rendered at build time or in the background after data revalidation. The result is cached and can be reused across requests. Static routes are fully cached in the Full Route Cache.

**Dynamic Rendering**
With Dynamic Rendering, routes are rendered at request time. This happens when your route uses request-specific information like cookies, headers, or search params.

## Server component vs Client component

- Next.js v16, Server component is default.
- Adding `use client` on the top of the page, it becomes a client component.
- Client Component - useState, useEffect, event handlers (onClick, onChange), Custom hooks.
- Server Components - Fetch data from DB or API
- Server Components - Reduce the amount of JavaScript sent to the browser.

<hr />

## SSG vs SSR vs ISR

- **Static Rendering (SSG)**: This is the default behavior if your page does not use dynamic functions (like reading headers, cookies, or search params) or data fetching that requires runtime execution. The initial HTML content will be present when you right-click the page and select "View Page Source".

- **Dynamic Rendering (SSR)**: A page automatically becomes dynamically rendered (SSR) if it uses dynamic functions like cookies() or headers() or if a fetch request uses { cache: 'no-store' }. The initial "View Page Source" might be minimal, and the content is populated via client-side JavaScript, or the page reloads as part of the save/change process in some scenarios.

- **Incremental Static Regeneration (ISR)**: This is an extension of SSG, enabled by adding the revalidate option to data fetching functions, allowing the page to be rebuilt at intervals after deployment.

**How to know:**

```js
npm run build

Route (app)
┌ ○ /
├ ○ /_not-found
├ ƒ /api/chat
├ ƒ /api/image_generator
├ ƒ /api/recipe
├ ƒ /api/summary
├ ƒ /api/users
├ ƒ /api/users/[id]
├ ○ /chat
├ ○ /image_generator
├ ○ /recipe
├ ○ /summary
├ ○ /users
├ ƒ /users/[id]/edit
└ ○ /users/new

○: Indicates a Statically Generated (SSG) page(default).
ƒ: Client-side rendering only.

```

- **(empty) or ○:** Indicates a Statically Generated (SSG) page (rendered at build time). This is the default for pages without dynamic data fetching.
- **ƒ:** Indicates a page with middleware or client-side rendering only.
- **λ:** Indicates a Server-Side Rendered (SSR) page (rendered at request time).
- **ISR:** Indicates Incremental Static Regeneration (a form of SSG that revalidates data after the initial build).

## Server component vs Client component

- Next.js v16, Server component is default.
- Adding `use client` on the top of the page, it becomes a client component.
- Client Component - useState, useEffect, event handlers (onClick, onChange), Custom hooks.
- Server Components - Fetch data from DB or API
- Server Components - Reduce the amount of JavaScript sent to the browser.

```js
//app/[id]/page.tsx
import LikeButton from '@/app/ui/like-button';
import { getPost } from '@/lib/data';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>,
}) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div>
      <main>
        <h1>{post.title}</h1>
        {/* ... */}
        <LikeButton likes={post.likes} />
      </main>
    </div>
  );
}
```
