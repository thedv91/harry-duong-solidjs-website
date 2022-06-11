import type { JSX, Component } from 'solid-js';
type Props = {
  title?: JSX.Element;
  intro?: JSX.Element;
  children: JSX.Element;
  id?: string;
};
const Section: Component<Props> = (props) => {
  return (
    <section class="py-20" id={props.id}>
      <div class="flex items-center">
        <span class="mr-8 h-[1px] w-14 bg-slate-700 dark:bg-gray-300"></span>
        <span class="text-xs uppercase text-gray-500 dark:text-gray-200">
          {props.intro}
        </span>
      </div>
      <h2 class="mt-2 mb-8 text-2xl uppercase">{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
