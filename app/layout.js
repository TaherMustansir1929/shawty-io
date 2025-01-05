import './globals.css';

export const metadata = {
  title: 'Shawty - Url Shortener',
  description: 'Shawty is an easy and efficient solution for shortening your URLs. Simplify your links and share them effortlessly.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
