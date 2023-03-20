import '../style/globals.css';

import { Providers } from '@/components/Providers'

export const metadata = {
  title: 'Orkut',
  description: 'Make friends, communities and have fun.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
