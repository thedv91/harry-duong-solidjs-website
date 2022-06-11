import Section from '~/components/Section';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <Section id="projects" intro="take a look at my" title="Projects">
      <article class="grid grid-cols-1 gap-8 rounded-3xl md:bg-white md:p-4 dark:md:bg-slate-800 lg:p-12">
        <ProjectItem
          name="FazzDoc - Telehealth Application"
          technologies={[
            'React',
            'ReactNative',
            'GraphQL',
            'NestJS',
            'TypeScript',
            'PostgreSQL',
          ]}
          features={[
            'Search and return doctors, medical facility and specialties matching the keywords',
            'User books an appointment with a doctor',
            'User can cancel a booking as long as it is not Completed or Cancelled',
          ]}
        />
        <ProjectItem
          name="MBAges - Insurance company website"
          technologies={['GraphQL', 'NextJS', 'NestJS', 'SEO', 'TypeScript']}
          features={[
            'Design a new website interface according to modern trends, support SEO-Marketing',
            'Integrate electronic payment gateway to allow users to pay online',
            'Develop tools to analyze costs and insurance package routes according to logic from customers',
          ]}
        />
      </article>
    </Section>
  );
};

export default Projects;
