import { Link } from 'solid-app-router';

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-primary font-thin uppercase my-16">
        Not Found
      </h1>
      <p class="mt-8">
        Visit{' '}
        <Link
          href="https://solidjs.com"
          target="_blank"
          class="text-primary hover:underline"
        >
          solidjs.com
        </Link>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <Link href="/" class="text-primary hover:underline">
          Home
        </Link>
      </p>
    </main>
  );
}
