// app/layout.tsx (Server Component)

import './globals.css';
import ThemeProviderLayout from './theme-provider-layout';

export const metadata = {
  title: 'Farhan Rajput Portfolio',
  description: 'Analyst-Communication in Telecommunications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderLayout>{children}</ThemeProviderLayout>
      </body>
    </html>
  );
}
