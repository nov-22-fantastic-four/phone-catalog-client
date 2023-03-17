import React, { useCallback } from 'react';
import styles from './Footer.module.scss';
import vector from '../../../images/icons/shevron-up.svg';
import { LogoLink } from '../LogoLink';
import { Container } from '../Container';

export const Footer: React.FC = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (

    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <LogoLink className={styles.logo} />

          <nav className={styles.nav}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_item}>
                <a
                  className={styles.nav_link}
                  href="https://github.com/nov-22-fantastic-four"
                >
                      Github
                </a>
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

            <button
              className={styles.scroll_button}
              onClick={handleScrollToTop}
            >
              <img
                src={vector}
                className={styles.vector}
                alt="scroll to the top"
              />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
