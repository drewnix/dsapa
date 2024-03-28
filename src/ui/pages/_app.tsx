import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteNavBar } from '@/components/site-navbar';
import '@/styles/index.css';
import {ModeToggle} from "@/components/mode-toggle.tsx";


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="bg-background flex flex-col justify-center items-center pt-20">
              <div className="w-full border-2 max-w-3xl mb-2 mx-auto p-6 bg-card rounded-md shadow relative">
                  <div className="flex justify-between items-start">
                      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                          Trivia
                      </h1>
                      <ModeToggle/>
                  </div>
                  <br />
                  <SiteNavBar/>
              </div>
          </div>
          <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default MyApp;