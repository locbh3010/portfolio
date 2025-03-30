import { PageTransition } from '@/shared/components/pageTransition'
import { Providers } from '@/shared/components/providers'
import cn from '@/shared/helpers/cn'
import { DefaultLayout } from '@/shared/layouts'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

const sora = Sora({
    variable: '--font-sora',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Hữu Lộc - Portfolio',
    description: 'I am a front-end developer, I love to code and build things',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            className="bg-black"
            lang="en"
        >
            <body className={cn(sora.variable, sora.className, 'antialiased')}>
                <Providers>
                    <PageTransition>
                        <DefaultLayout>{children}</DefaultLayout>
                    </PageTransition>
                </Providers>
            </body>
        </html>
    )
}
