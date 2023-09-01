import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merca - Libre",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{height: '3rem', backgroundColor: 'yellow', padding: "0 4rem", display: "flex"}}>
          <form action='/items' style={{margin: 'auto', display: 'flex', flex: "1", gap: '16px', alignItems: 'center'}}>
            <Link href={'/'} style={{textDecoration: 'none', color: "black", backgroundColor: 'white', border: "2px blue solid", borderRadius: '10px', padding: "4px"}}>
              Merca Libre
            </Link>
            <input style={{height: '1.3rem', flex: '1', paddingLeft: "0.5rem", paddingRight: "0.5rem"}} type="text" name="search" placeholder="Search Product"/>
            <button style={{backgroundColor: "lightblue", cursor: 'pointer', padding: '4px'}} type="submit">
              Search
            </button>
          </form>
        </header>
        <main style={{padding: '4rem', margin: 'auto'}}>
          {children}
        </main>
      </body>
    </html>
  );
}
