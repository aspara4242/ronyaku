// components/ContactLinks.tsx
import React from "react";
import { XIcon, InstagramIcon, YoutubeIcon, MailIcon } from "./Icons";

const ContactLinks = () => {
  return (
    <div className="mb-12">
      <div className="mx-auto mb-6 grid w-fit grid-cols-3 items-center justify-center gap-6">
        <div className="flex justify-start">
          <a
            href="https://twitter.com/ronyaku4444"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="w-7" />
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/ronyaku44"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-8" />
          </a>
        </div>

        <div className="flex justify-end">
          <a
            href="https://www.youtube.com/@ronyaku4444"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon className="w-9" />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <MailIcon className="w-6" />
        <p className="text-sm">ronyaku4444@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactLinks;