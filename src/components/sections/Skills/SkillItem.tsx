import type { Component, JSX } from 'solid-js';

type Props = {
  name: string;
  children: JSX.Element;
};
const SkillItem: Component<Props> = (props) => {
  return (
    <div class="flex h-24 w-full min-w-24 cursor-pointer select-none flex-col items-center justify-center rounded-lg border p-2.5 shadow-md dark:bg-slate-600">
      {props.children}
      <p class="mt-2.5 text-sm">{props.name}</p>
    </div>
  );
};

export default SkillItem;
