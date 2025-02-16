// HomeLayout.tsx
import DesktopNav from '@/components/home/navbar/desktop-nav';
import MobileNav from '@/components/home/navbar/mobile-nav';
// import User from '@/components/home/navbar/user';
import Providers from '@/components/home/providers.';

// import { SearchInput } from '@/components/home/search/search';

export const metadata = {
  title: 'IA Conteúdo Digital | ®TM',
  description:
    'Aumente as vendas com conteúdo digital da The Marketing com inteligência artificial, páginas web, redes sociais, anúncios e Google Cloud. Next.js, Firebase e Gemini.',
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <main className="flex-1 w-full mx-auto max-w-7xl">
        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <div className="flex flex-col w-full  ">
          <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent ">
            <MobileNav />
            {/* <SearchInput />
            <User /> */}
          </header>

          {/* Main Content */}
          <div className="flex-1 w-full px-4 sm:px-0">
            {children}
          </div>
        </div>
      </main>
    </Providers>
  );
}
