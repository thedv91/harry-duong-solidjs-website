import Section from '../Section';

const About = () => {
  return (
    <Section id="info" intro="some info" title="About me">
      <article class="rounded-3xl md:bg-white md:p-12 dark:md:bg-slate-800">
        <p class="font-semibold">
          {`I'm a Full-stack developer with a background in computer systems and network infrastructure. My 8 years
    of IT experience has given me a strong foundation for web development and building complex solutions.
    Recently, I graduated from the`}{' '}
          <a
            href="https://www.freecodecamp.org/"
            title="Free Code Camp"
            target="_blank"
            rel="noreferrer"
            class="text-primary dark:text-sky-400"
          >
            freeCodeCamp
          </a>
          . I am passionate about coding and solving problems through code, and
          I am excited to work alongside other amazing programmers and learn so
          much more!
        </p>
      </article>
    </Section>
  );
};

export default About;
