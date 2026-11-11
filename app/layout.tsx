import Link from "next/link";

export const metadata = {
  title: "Task Board",
  description: "A simple board for planning your tasks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/tasks">All tasks</Link>
        </nav>
        {children}
        <footer>
          <a href="https://example.com/sponsor" rel="sponsored">Our sponsor</a>
          {" | "}
          <a href="https://example.org/planning-tips" rel="ugc">Tip from a user</a>
        </footer>
      </body>
    </html>
  );
}
