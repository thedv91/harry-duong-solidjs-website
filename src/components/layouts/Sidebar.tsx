// import Link from 'next/link';
import { createSignal, For } from 'solid-js';
import cls from 'clsx';
import HomeIcon from '../icons/home';
import ArrowDown from '../icons/arrow-down';
import { MenuIcon } from '../icons/menu';
import { UserIcon } from '../icons/user';
import { BriefcaseIcon } from '../icons/briefcase';
import { CpuIcon } from '../icons/cpu';
import { PhoneIcon } from '../icons/phone';

const items = [
  {
    id: 'me',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    id: 'info',
    label: 'About',
    icon: <UserIcon />,
  },
  {
    id: 'skill',
    label: 'Skills',
    icon: <CpuIcon />,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <BriefcaseIcon />,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: <PhoneIcon />,
  },
];

const Sidebar = () => {
  const [isOpen, setOpen] = createSignal(false);
  const onClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <button
        class="fixed top-4 left-4 block cursor-pointer md:hidden"
        type="button"
        aria-label="Toggle menu"
        onClick={() => {
          setOpen(!isOpen());
        }}
      >
        <MenuIcon />
      </button>
      <div
        role="button"
        aria-hidden={true}
        aria-label="Overlay"
        onClick={() => setOpen(false)}
        class={cls('fixed inset-0 z-10 bg-black  transition-all', {
          'invisible bg-opacity-0': !isOpen(),
          'bg-opacity-30': isOpen(),
        })}
      />
      <aside
        class={cls(
          'fixed top-0 bottom-0 -left-28 z-20 flex w-28 flex-col justify-between bg-primary text-white transition-all dark:bg-slate-600 md:left-0',
          {
            'left-0': isOpen(),
          },
        )}
      >
        <a
          href="#"
          title="Harry Duong"
          class="select-none text-center text-[40px]"
        >
          HD
        </a>

        <nav>
          <ul class="text-center">
            <For each={items}>
              {({ id, label, icon }) => (
                <li>
                  <a
                    aria-label={label}
                    class="inline-block px-4 py-2"
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onClick(id);
                    }}
                  >
                    {icon}
                    <span class="sr-only">{label}</span>
                  </a>
                </li>
              )}
            </For>
          </ul>
        </nav>

        <span class="mx-auto mb-4 animate-bounce select-none">
          <ArrowDown />
        </span>
      </aside>
    </>
  );
};

export default Sidebar;
