"use client";

import { Reveal } from "~/app/_components/reveal";

export default function Contact2() {
  return (
    <div className="relative top-0 flex h-screen w-screen items-center justify-center bg-gradient-to-b from-white to-stone-100  text-dark-green-default">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col">
          <Reveal>
            <h2 className="text-custom-h2">Contacts</h2>
          </Reveal>
          <div className="text-custom-h6 text-dark-grey-default">
            <Reveal>
              <p>+62 15256912345</p>
            </Reveal>
            <Reveal>
              <p>amarento.id@gmail.com</p>
            </Reveal>
            <Reveal>
              <p>amarento.id</p>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col">
          <Reveal>
            <h3 className="text-custom-h3">Ready to get started?</h3>
          </Reveal>
          <div className="w-full min-w-[200px] max-w-sm">
            <Reveal>
              <input
                className="ease mb-4 w-[250px] rounded-md border border-dark-green-default bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
                placeholder="Your Name"
                type="text"
              />
            </Reveal>
            <Reveal>
              <input
                className="ease w-[250px] rounded-md border border-dark-green-default bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
                placeholder="Leave your WhatsApp number"
                type="text"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
