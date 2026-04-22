import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Custom App',
  description: 'A customized Next.js app with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Custom App</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-blue-200 transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-blue-200 transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
                <li><a href='/events' className='hover:text-blue-200 transition-colors'>Events</a></li>
                <li><a href='/resources' className='hover:text-blue-200 transition-colors'>Resources</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

