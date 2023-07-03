export const metadata = {
  title: 'Flexible',
  description: 'Shwocase and discover remarkable develper project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
