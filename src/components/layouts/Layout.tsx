import { type Component, type JSX } from 'solid-js';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout: Component<{ children: JSX.Element }> = (props) => {
  return (
    <>
      <Sidebar />
      <a href="#main" aria-label="Skip to content" class="sr-only">
        Skip to content
      </a>
      <main id="main" class="md:ml-28">
        <div class="flex flex-1 flex-col bg-slate-50 px-8 dark:bg-transparent">
          {props.children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
