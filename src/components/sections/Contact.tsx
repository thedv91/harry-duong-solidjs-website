import { Component, createSignal, JSX } from 'solid-js';
import { CalendarIcon } from '../icons/calendar';
import { MailIcon } from '../icons/mail';
import Section from '../Section';

type InputProps = JSX.IntrinsicElements['input'];

const Input: Component<InputProps> = (props) => {
  return <input {...props} class="w-full border px-4 py-4" />;
};

const Contact: Component = () => {
  const [data, setData] = createSignal<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [loading, setLoading] = createSignal(false);
  const onChange: JSX.DOMAttributes<
    HTMLInputElement | HTMLTextAreaElement
  >['onChange'] = (e) => {
    setData((prev) => ({
      ...prev,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };
  // const sendMail = async () => {
  //   if (loading()) return;
  //   setLoading(true);
  //   try {
  //     await fetch('/api/send-mail', {
  //       method: 'POST',
  //       headers: { 'content-type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });
  //     setData({});
  //   } catch (err) {
  //     //
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const value = data();
  return (
    <Section id="contact" intro="Say hello" title="Contact">
      <article class="rounded-3xl md:bg-white md:p-12 dark:md:bg-slate-800">
        <h3 class="mb-4 text-xl font-semibold">Get in Touch</h3>
        <div class="grid gap-8 md:grid-cols-2">
          <div class="flex flex-col items-center rounded-2xl border p-8 shadow-md">
            <div class="flex h-16 w-16 items-center justify-center rounded-md bg-green-100 bg-opacity-80">
              <MailIcon class="text-green-700" />
            </div>
            <a class="my-2" href="mailto:thedv91@gmail.com">
              thedv91@gmail.com
            </a>
            <p class="text-sm">Email Me</p>
          </div>
          <div class="flex flex-col items-center rounded-2xl border p-8 shadow-md">
            <div class="flex h-16 w-16 items-center justify-center rounded-md bg-blue-100 bg-opacity-80">
              <CalendarIcon class="text-blue-700" />
            </div>
            <a class="my-2" href="mailto:thedv91@gmail.com">
              GoogleCalendar
            </a>
            <p class="text-sm">Schedule a Meeting</p>
          </div>
        </div>
        <div class="mt-8">
          <h3 class="mb-4 text-xl font-semibold">Contact Form</h3>

          <form
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div class="grid gap-8">
              <div class="grid gap-8 lg:grid-cols-2">
                <Input
                  onChange={onChange}
                  value={value.name ?? ''}
                  name="name"
                  required
                  placeholder="Your Name*"
                />
                <Input
                  onChange={onChange}
                  value={value.email ?? ''}
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email*"
                />
              </div>
              <Input
                onChange={onChange}
                value={value.subject ?? ''}
                name="subject"
                required
                placeholder="Subject*"
              />
              <textarea
                onChange={onChange}
                value={value.message ?? ''}
                name="message"
                required
                placeholder="Your Message*"
                class="w-full border px-4 py-4"
              />
            </div>

            <button
              type="submit"
              disabled={loading()}
              class="dark:highlight-white/20 mx-auto mt-10 flex h-12 w-full items-center justify-center rounded-full bg-primary px-6 font-semibold text-white transition-all duration-100 ease-in-out hover:bg-violet-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 sm:w-auto"
            >
              SEND
            </button>
          </form>
        </div>
      </article>
    </Section>
  );
};

export default Contact;
