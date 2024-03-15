import { url } from "inspector";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ backgroundImage: 'url("/bg.jpg")'}} className="border-b-2 h-screen bg-cover">
      {children}
    </div>
  );
}
