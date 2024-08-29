import React from "react";

export default function Header() {
  return (
    <header className="p-5 text-white">
      <nav className="flex justify-between">
        <div className="text-xl font-bold">Career Portfolio</div>
        <ul className="flex space-x-5">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#certification" className="hover:underline">
              Certifications
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
