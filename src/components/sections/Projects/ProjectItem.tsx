import type { Component} from 'solid-js';
import { For } from 'solid-js';

type Props = {
  image?: string;
  name: string;
  technologies?: string[];
  features?: string[];
};
const ProjectItem: Component<Props> = (props) => {
  return (
    <div class="overflow-hidden rounded-lg border p-8 shadow-2xl">
      <h3 class="text-xl font-semibold">{props.name}</h3>
      <h4 class="text-ellipsis break-words font-semibold">
        Technologies Used:{' '}
        <For each={props.technologies}>
          {(value, index) => (
            <>
              {index() !== 0 && <span>,</span>}
              <span class="ml-2 text-primary dark:text-sky-400">{value}</span>
            </>
          )}
        </For>
      </h4>
      <ul class="ml-5 mt-2 list-disc">
        <For each={props.features}>{(value) => <li>{value}</li>}</For>
      </ul>
    </div>
  );
};

export default ProjectItem;
