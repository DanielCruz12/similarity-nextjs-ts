import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={cn('bg-white text-slate-900 antialiased', inter.className)}
		>
			<body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
				<Providers>
					{children}
					<Navbar />
				</Providers>
				{/* Allow more height for mobile menu on mobile */}
				<div className="h-40 md:hidden" />
			</body>
		</html>
	)
}
