import './globals.css'

export const metadata = {
  title: 'MyApp',
  description: 'Developed by Bishnu by using NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  )
}
