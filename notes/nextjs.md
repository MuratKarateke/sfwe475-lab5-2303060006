# Strand 1
- `app/tasks/page.tsx` will answer to `/tasks`. Visiting `/task` (singular) will return a 404.
- The `console.log` for `/tasks/1` appeared in the terminal (where npm run dev is running), not the browser console. The `typeof id` was `string`. It appeared there because Server Components execute on the Node.js server.
- The `lang="en"` attribute is critical for screen readers so they know which language rules and pronunciation to apply.
- Clicking a plain `<a href>` caused a full document request in the Network tab (full page reload). The Next.js `<Link>` component performs client-side navigation without a full page refresh.
- Soft 404 check: `app/not-found.tsx` returns a real 404 status code in the Network tab, not a 200 soft 404.
- Layouts wrapping `/tasks/1`: There are two layouts (`app/layout.tsx` and `app/tasks/layout.tsx`). `app/layout.tsx` stays in place during navigation.

| Route | HTTPS | Short & Readable | Lowercase | Hyphens | Few Query Params |
|---|---|---|---|---|---|
| `/` | at deployment | Yes | Yes | N/A | Yes |
| `/tasks` | at deployment | Yes | Yes | N/A | Yes |
| `/tasks/[id]` | at deployment | Yes | Yes | Yes | Yes |

# Strand 2
- Error Prediction: Rendering `<TaskBoard>` without `"use client"` throws an error because Server Components do not support React hooks like `useState`.
- Terminal Log: The console log appeared in the terminal. `typeof window` was `undefined`. This proves the Server Component runs entirely on the server where the browser's DOM/window object doesn't exist.
- View Source: In Next.js, the task titles are visible in the raw HTML because the server pre-renders them. In Vite (Lab 4), it was just an empty `<div id="root"></div>` because rendering happened via CSR (Client-Side Rendering) in the browser.

| File | Server or Client? | Reason |
|---|---|---|
| `app/layout.tsx` | Server | Default in Next.js App Router, no client hooks needed. |
| `app/tasks/page.tsx` | Server | Fetches data asynchronously without user interactivity hooks. |
| `TaskBoard.tsx` | Client | Needs `"use client"` because it uses `useState`. |
| `TaskList.tsx` & `TaskCard.tsx` | Client | Imported by `TaskBoard` (inside the client boundary). |
| `FilterBar.tsx` & `NewTaskForm.tsx` | Client | Imported by `TaskBoard` (inside the client boundary). |

# Strand 3
- Static Routing Problem: If `/tasks` is rendered statically at build time, it will show stale data if tasks change every minute.
- SSR / CSR Decisions:
  (a) Public page for one shared task: **Server** (Must be visible to search engines).
  (b) Drag-and-drop planning board: **Browser/Client** (Highly interactive, private).
  (c) About page: **Ahead of time / Static** (Static content, rarely changes, good for SEO).
- `rel="sponsored"` tells search engines the link is paid/sponsored. `rel="ugc"` tells them the link is User Generated Content.
- For a public page, I would choose SSR (like `/tasks`) instead of CSR (`/tasks-csr`) because SSR delivers the populated HTML directly, improving SEO and reducing initial load time, whereas CSR forces the browser to download JS and make API calls before displaying content.


