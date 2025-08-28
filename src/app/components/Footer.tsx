import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-neutral-black text-neutral-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm text-neutral-grey">
          © 2025 YourTeamName. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-white/10 hover:bg-color-primary-dark transition-colors"
          >
            <FaLinkedin className="text-color-primary w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-white/10 hover:bg-color-primary-dark transition-colors"
          >
            <FaGithub className="text-color-primary w-5 h-5" />
          </a>
          <a
            href="mailto:your@email.com"
            className="p-2 rounded-full bg-neutral-white/10 hover:bg-color-primary-dark transition-colors"
          >
            <MdEmail className="text-color-primary w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
