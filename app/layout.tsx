import UnstyledLink from '@/components/links/UnstyledLink';
import './globals.css';
import './colors.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <header className='sticky top-0 z-50 bg-white'>
          <div className='layout flex h-14 items-center justify-between'>
            <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
              Home
            </UnstyledLink>
            <nav>
              <ul className='flex items-center justify-between space-x-4'>
                <li>
                  <UnstyledLink href='/test' className='hover:text-gray-600'>
                    Test
                  </UnstyledLink>
                </li>
                <li>
                  <UnstyledLink
                    href='/components'
                    className='hover:text-gray-600'
                  >
                    Components
                  </UnstyledLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className='px-10'>{children}</main>
      </body>
    </html>
  );
}
