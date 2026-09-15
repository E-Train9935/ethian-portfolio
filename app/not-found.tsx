import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <span>LEVEL / UNKNOWN</span>
      <h1>That system is not on this level.</h1>
      <Link href="/">Return to VERTICAL//CITY →</Link>
    </main>
  );
}
