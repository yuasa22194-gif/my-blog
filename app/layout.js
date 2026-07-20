import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'


export default function DashboardLayout({children,}) {
  return (
    <html lang="ja">
      <body>
        <header className={styles.header}>
          <div className={styles.home}>
            <Link href="/" className={styles.homeLink}>
              Blog
            </Link>
          </div>
          <img src="/icon.jpg" alt="Logo" className={styles.icon} />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
