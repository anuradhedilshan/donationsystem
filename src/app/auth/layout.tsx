import { url } from 'inspector';
import { Suspense } from 'react';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {' '}
      <Suspense>{children}</Suspense>
    </div>
  );
}
