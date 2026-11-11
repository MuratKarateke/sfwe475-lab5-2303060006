4. `app/tasks/page.tsx` is a Server Component because it only fetches data and doesn't need interactivity. `TaskBoard` is a Client Component because it handles user interactions and states like filtering (`useState`), which must run in the browser.

5. View source on `/tasks` in this lab showed the actual task titles in the HTML, whereas Vite showed an empty div. This is because Next.js pre-renders the page on the server (SSR), while Vite renders everything on the client side using JavaScript (CSR).

6. A page at `/Tasks/Project_Plan` breaks the "lowercase" and "hyphens not underscores" URL rules. It should be renamed to `/tasks/project-plan` to be readable, standardized, and SEO-friendly.
