import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
