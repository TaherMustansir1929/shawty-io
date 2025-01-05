import Nav from '@components/Nav';
import '@styles/globals.css';

export const metadata = {
  title: 'v0 App',
  description: 'Created with v0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        </body>
    </html>
  );
}
