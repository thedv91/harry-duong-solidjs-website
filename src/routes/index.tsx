import { Link, Meta, Title } from 'solid-meta';
import Layout from '~/components/layouts/Layout';
import About from '~/components/sections/About';
import Contact from '~/components/sections/Contact';
import Info from '~/components/sections/Info';
import Projects from '~/components/sections/Projects';
import SkillSet from '~/components/sections/Skills';

export default function Home() {
  return (
    <Layout>
      <Title>Harry Duong</Title>
      <Meta name="description" content="Harry Duong's personal website" />
      <Meta name="og:title" content="Harry Duong" />
      <Meta property="og:url" content="https://harry-duong.vercel.app/" />
      <Meta name="og:description" content="Harry Duong's personal website" />
      <Meta name="twitter:card" content="summary"></Meta>
      <Meta name="twitter:site" content="@nopbongdem" />
      <Meta name="twitter:creator" content="@nopbongdem" />
      <Link rel="preload" as="image" href="/images/avatar.jpeg" />
      <Link rel="preload" as="image" href="/images/avatar@1.5x.jpeg" />
      <Link rel="preload" as="image" href="/images/avatar@2x.jpeg" />
      <div class="container mx-auto md:px-10">
        <Info />
        <About />
        <SkillSet />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}
