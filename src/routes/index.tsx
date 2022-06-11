import { Link, Meta, Title } from 'solid-meta';
import Layout from '~/components/layouts/Layout';
import About from '~/components/sections/About';
import Contact from '~/components/sections/Contact';
import Info from '~/components/sections/Info';
import Projects from '~/components/sections/Projects';
import SkillSet from '~/components/sections/Skills';
import { createServerResource } from 'solid-start/server';
import type { RouteDataFunc } from 'solid-app-router';
import { useRouteData } from 'solid-app-router';

type Data = {
  deviceMemory?: string;
  ect?: string;
};
export const routeData: RouteDataFunc = () => {
  return createServerResource((_, { request }) => {
    return {
      deviceMemory: request.headers.get('device-memory'),
      ect: request.headers.get('ect'),
    };
  });
};

export default function Home() {
  const headers = useRouteData<() => Data>();

  return (
    <Layout>
      <Title>Harry Duong</Title>
      <Meta name="description" content="Harry Duong's personal website" />
      <Meta name="og:title" content="Harry Duong" />
      <Meta property="og:url" content="https://harry-duong-solid.vercel.app/" />
      <Meta name="og:description" content="Harry Duong's personal website" />
      <Meta name="twitter:card" content="summary" />
      <Meta name="twitter:site" content="@nopbongdem" />
      <Meta name="twitter:creator" content="@nopbongdem" />
      <Link
        rel="preload"
        as="image"
        href="/images/avatar.webp"
        type="image/webp"
      />

      <div class="container mx-auto md:px-10">
        <pre>{JSON.stringify(headers(), null, 2)}</pre>
        <Info />
        <About />
        <SkillSet />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
