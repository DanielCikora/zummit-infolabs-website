import { useState } from "react";
export default function NavigationLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: "/", key: 0, text: "HOME" },
    { href: "/", key: 1, text: "PROJECTS" },
    { href: "/", key: 2, text: "CAREERS" },
    { href: "/", key: 3, text: "ABOUT" },
    { href: "/", key: 4, text: "CONTACT" },
  ];

  const toggleOpen = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <div
      className={`navigation-links${isOpen ? " navigation-links--open" : ""}`}
    >
      <ul className='navigation-ul'>
        {navLinks.map((navLink) => (
          <li className='navigation-li' key={navLink.key}>
            <a className='main-link navigation-a' href={navLink.href}>
              {navLink.text}
            </a>
          </li>
        ))}
      </ul>
      <button className='hamburger' type='button' onClick={toggleOpen}>
        <span className='hamburger-line hamburger-line--1'></span>
        <span className='hamburger-line hamburger-line--2'></span>
        <span className='hamburger-line hamburger-line--3'></span>
      </button>
    </div>
  );
}
