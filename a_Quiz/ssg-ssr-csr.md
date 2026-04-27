# SSG, SSR, CSR

### CSR — Client-Side Rendering

**"The browser does all the work."**

This is what you've been doing at Infosys and HyreCar. React ships a nearly empty HTML file + a JavaScript bundle. The browser downloads JS, runs it, and React builds the DOM on the client.

```
Server → sends empty HTML + JS bundle → Browser runs JS → Page appears
```

- `Pros`: Rich interactivity, fast subsequent navigation, great for dashboards/authenticated apps
- `Cons`: Slow initial load (blank screen while JS loads), bad SEO (crawlers see empty HTML)
- `Use when`: Admin dashboards, internal tools, apps behind a login — HyreCar's driver/owner portal is a perfect example.

**Summary**

React ships a nearly empty HTML file + a JavaScript bundle. When a user accesses the site, the browser downloads the JS and React mounts the app using `createRoot()`. React then builds a Virtual DOM — when state changes, React compares old vs. new and only updates the parts of the real DOM that actually changed.

**Virtual DOM vs RealDOM**

The Virtual DOM is a lightweight, in-memory copy of the real DOM that React uses to calculate what changed — the real DOM is the actual HTML elements the browser renders on screen.

---

### SSR — Server-Side Rendering (getServerSideProps)

**"The server builds the HTML on every request."**

Each time a user hits a URL, the server runs React, produces full HTML, and sends it. The browser gets real content immediately. React then "hydrates" it (attaches event listeners).

```
Browser requests page → Server runs React → Sends full HTML → Browser hydrates
```

- Pros: Fast first paint, great SEO, always fresh data
- Cons: Every request hits the server (higher cost/latency), can't cache as aggressively
- Use when: E-commerce product pages, news articles, any public page where SEO matters and data changes frequently (e.g., live inventory, current pricing).

---

### SSG — Static-Site Generation (getStaticProps)

**"HTML is built once at deploy time."**

The server runs React at build time, not request time. The output is plain .html files sitting on a CDN.

```
Build time: React runs → generates HTML files → deployed to CDN
Browser requests page → CDN returns pre-built HTML instantly
```

- Pros: Blazing fast (CDN-cached), cheapest to host, best SEO, incredibly scalable
- Cons: Data can go stale between deploys, rebuild needed for content changes
- Use when: Marketing/landing pages, blog posts, documentation sites — content that doesn't change per-user or per-request.

```js
//src/pages/claims.jsx
// This function runs at BUILD TIME on the server
// The browser never sees this code
export async function getStaticProps() {
  const claimTypes = [
    {
      id: 1,
      title: 'Report Damage',
      description: 'Collisions, Fire, Mechanical Issues, Theft',
    },
    {
      id: 2,
      title: 'Request a Reimbursement',
      description: 'Cleaning, Gas, Impound Fees, Lost Keys',
    },
  ];

  return {
    props: { claimTypes }, // ← passed to the component below
  };
}

// This component receives pre-built props — no useEffect, no loading state
export default function ClaimsPage({ claimTypes }) {
  return (
    <div>
      <h1>What type of claim are you filing?</h1>
      <div style={{ display: 'flex', gap: '16px' }}>
        {claimTypes.map((claim) => (
          <div
            key={claim.id}
            style={{ border: '1px solid #ccc', padding: '24px' }}>
            <h2>{claim.title}</h2>
            <p>{claim.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### createRoot() vs hydrateRoot()

#### createRoot()

used in CSR. React builds the DOM from scratch in the browser. There is no pre-existing HTML to work with.

#### hydrateRoot()

used in SSR/SSG. The server already sent real HTML, so React attaches event listeners to the existing HTML instead of rebuilding it. This is called hydration.

```js
// CSR — builds DOM from nothing
createRoot(document.getElementById('root')).render(<App />);

// SSR/SSG — HTML already exists, React "wakes it up"
hydrateRoot(document.getElementById('root'), <App />);
```

#### Summary (draft)

CSR — Client-Side Rendering

- The browser does all the work.
- React ships a nearly empty HTML file + a JavaScript bundle. When a user accesses the site, the browser downloads the JS and React mounts the app using createRoot(). React then builds a Virtual DOM — when state changes, React compares old vs. new and only updates the parts of the real DOM that actually changed.

SSG — Static-Site Generation

- "HTML is built once at deploy time."
- `getStaticProps`
- Static page, a landing page, HC claims page - never change dynamically.
- Next.js only (built-in)

SSR - Server-Side Rendering

- The server builds the HTML on every request."
- `getServerSideProps`
