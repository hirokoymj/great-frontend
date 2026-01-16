# CSR, SSR,

```text
- CSR: the browser + empty HTML -> download JS and CSS to build page -> display
- SSR: Each request -> pre-render a full HTML on the server -> display immediately.
```

## CSR (Client-side rendering)

1. Initial Request: The browser requests a page from the server.
2. Minimal HTML: The server sends back a nearly empty HTML file with links to CSS and JavaScript files.
3. JavaScript Execution: The browser downloads and runs the JavaScript.
4. Data Fetching: The JavaScript makes API calls to get the necessary data.
5. Rendering: JavaScript dynamically renders the content and builds the User Interface (UI) in the browser using the fetched data.

- React application (client-side rendering), the browser receives **an empty HTML shell** and then **downloads and executes JavaScript** to build the page.
- (Next.js) 'use client'

## SSR (Server-side rendering)

1. **Request Received**: The user's browser sends a request to the Next.js server for a specific page.
2. **Server Processes**: The server executes the necessary code, which can include fetching data from an API or database, to generate the full HTML content for that specific request.
3. **HTML Sent**: The server sends the complete, data-filled HTML page back to the browser.
4. **Hydration**: The browser displays the HTML content immediately. In the background, React's JavaScript loads and "hydrates" the page, making it interactive (attaching event handlers, etc.).

- Pages are pre-rendered into complete HTML on the server for **each user request**, rather than in the user's browser. This process results in a fully formed HTML document being sent to the browser, allowing the content to be displayed immediately.

**Summary(draft)**

```text
- CSR (Client-side rendering): the browser + empty HTML -> download JS and CSS to build page -> display
- SSR (Server-side rendering): Each request -> pre-render a full HTML on the server -> display immediately.
```

| Feature            | Client-Side Rendering (CSR)                                                                      | Server-Side Rendering (SSR)                                                                               | Static Site Generation (SSG)                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **When Rendered?** | In the user's browser at runtime (after initial load)                                            | On the server for each page request                                                                       | At build time, before deployment                                                |
| **How it works**   | Server sends a minimal HTML skeleton; JavaScript fetches data and builds the page in the browser | Server generates complete HTML and sends it to the browser, with JavaScript added later for interactivity | All pages are pre-built into static HTML, CSS, and JS files and served directly |
| **Initial Load**   | Slower, as the browser must download and execute JavaScript first                                | Faster, user sees content immediately                                                                     | Extremely fast, served from a CDN                                               |
