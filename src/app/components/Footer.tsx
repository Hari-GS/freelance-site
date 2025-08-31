import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-neutral-black text-gray-50 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-50">
          © 2025 Lancerra. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-white/10 hover:bg-color-primary-dark transition-colors"
          >
            <FaLinkedin className="text-color-primary w-5 h-5" />
          </a> */}
          <a
            href="https://www.instagram.com/lancerra.freelance/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-neutral-white/10 hover:bg-color-primary-dark transition-colors"
          >
            <FaInstagram className="text-color-primary w-5 h-5" />
          </a>
          <a
            href="mailto:lancerra.freelance@gmail.com"
            className="p-2 rounded-full bg-neutral-white/10 hover:bg-color-primary-dark transition-colors"
          >
            <MdEmail className="text-color-primary w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
