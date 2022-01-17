import React from "react";

import styles from "./Footer.module.scss";

interface SocialNetworkProps {
  href: string;
}

const SocialNetwork: React.FC<SocialNetworkProps> = ({ href, children }) => (
  <a
    className={styles.SocialNetwork}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const Footer: React.FC = () => (
  <footer className={styles.Footer}>
    <div>
      <SocialNetwork href="https://www.linkedin.com/in/thibaud-larivi%C3%A8re-0451655b/">
        <i className="bi bi-linkedin" />
      </SocialNetwork>
      <SocialNetwork href="https://github.com/tlariviere">
        <i className="bi bi-github" />
      </SocialNetwork>
      <p>&copy; {new Date().getFullYear()} Thibaud Larivière</p>
    </div>
  </footer>
);

export default Footer;
