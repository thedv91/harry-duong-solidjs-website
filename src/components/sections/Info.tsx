import { GithubIcon } from '../icons/github';
import { LinkedInIcon } from '../icons/linkedin';
import { TwitterIcon } from '../icons/twitter';

const Info = () => {
  return (
    <section class="relative lg:h-100vh" id="me">
      <div class="grid h-full grid-cols-1 gap-10 transition-all lg:grid-cols-2 lg:gap-4">
        <div class="flex h-full flex-col items-center justify-center">
          <div class="mt-16 h-250 w-250 cursor-pointer overflow-hidden rounded-full shadow-xl ring-primary ring-offset-4 ring-offset-purple-400 transition-all hover:shadow-2xl hover:ring-4 focus:ring-4 dark:ring-blue-700 dark:ring-offset-blue-400 md:h-350 md:w-350 lg:mt-0">
            <picture>
              <source srcset="/images/avatar.jpeg" type="image/jpeg" />
              <source srcset="/images/avatar.webp" type="image/webp" />
              <img
                class="img-fluid"
                src="/images/avatar.jpeg"
                alt="Harry Duong"
              />
            </picture>
          </div>
        </div>
        <div class="flex h-full flex-col items-center justify-center lg:items-start">
          <p class="uppercase">{`Hi there! I'm`}</p>
          <h1 class="text-4xl uppercase">
            <span class="text-primary dark:text-sky-400">Harry</span> Duong
          </h1>
          <p>
            A{' '}
            <span class="font-semibold text-primary dark:text-sky-400">
              Full-Stack developer
            </span>{' '}
            passionate about creating interactive applications and experiences
            on the web.
          </p>
          <div class="mt-8 flex items-center">
            <a
              download
              class="dark:highlight-white/20 mr-10 flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-semibold text-white transition-all duration-100 ease-in-out hover:bg-violet-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 sm:w-auto"
              href="/files/harry-duong-resume.pdf"
              title="Download my resume"
              aria-label="Download my resume"
              onClick={() => {
                // sendEvent('view_item', {
                //   category: 'resume',
                //   action: 'download',
                // });
              }}
            >
              Resume
            </a>
            <ul class="flex">
              <li>
                <a
                  class="flex h-10 w-10 items-center justify-center rounded border-none bg-white p-2 text-primary shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary dark:border-gray-800 dark:bg-slate-700 dark:text-white dark:hover:border-gray-700 dark:hover:shadow-lg"
                  href="https://github.com/thedv91"
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                >
                  <GithubIcon />
                </a>
              </li>
              <li class="mx-4">
                <a
                  class="flex h-10 w-10 items-center justify-center rounded border-none bg-white p-2 text-primary shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary dark:border-gray-800 dark:bg-slate-700 dark:text-white dark:hover:border-gray-700 dark:hover:shadow-lg"
                  href="https://www.linkedin.com/in/harry-duong"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  class="flex h-10 w-10 items-center justify-center rounded border-none bg-white p-2 text-primary shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary dark:border-gray-800 dark:bg-slate-700 dark:text-white dark:hover:border-gray-700 dark:hover:shadow-lg"
                  href="https://twitter.com/nopbongdem"
                  target="_blank"
                  rel="noreferrer"
                  title="Twitter"
                >
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
