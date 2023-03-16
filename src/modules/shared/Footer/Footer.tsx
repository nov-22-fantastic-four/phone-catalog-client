import React, { useCallback } from 'react';
import { Container } from '../Container';
import styles from './Footer.module.scss';
import logo from '../../../images/logo.svg';
import vector from '../../../images/vector.svg';

export const Footer: React.FC = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <Container>
      <div className={styles.footer}>
      <div className={styles.logo_icon}>
        <a href="#home">
        <img
        src={logo}
        alt="logo"
        className={styles.logo}
        />
      </a>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#github">Github</a>
            </li>

            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#contacts">Contacts</a>
            </li>

            <li className={styles.nav_item}>
              <a className={styles.nav_link} href="#rights">Rights</a>
            </li>
          </ul>
        </nav>

        <div className={styles.scroll}>
          <p className={styles.scroll_text}>Back to top</p>
          <button className={styles.scroll_button} onClick={handleScrollToTop}>
            <img src={vector} alt="scroll to the top"/>
          </button>

        </div>
      </div>
    </Container>

  );
};
