import React from 'react';
import styles from './Footer.module.scss';
import vector from '../../../images/icons/shevron-up.svg';
import { LogoLink } from '../LogoLink';
import { Container } from '../Container';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../../../utils';
import { useHasScroll } from '../../../hooks';
import cn from 'classnames';

export const Footer: React.FC = () => {
  const hasScroll = useHasScroll();

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
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
              </li>

              <li className={styles.nav_item}>
                <NavLink
                  className={styles.nav_link}
                  to={'/team'}
                >
                  Team
                </NavLink>
              </li>

              <li className={styles.nav_item}>
                <a
                  className={styles.nav_link}
                  // eslint-disable-next-line max-len
                  href="https://dictionary.cambridge.org/dictionary/english/rights"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Rights
                </a>
              </li>
            </ul>
          </nav>

          <div
            className={cn(styles.scroll, {
              [styles.hidden]: !hasScroll
            })}
            onClick={scrollToTop}
          >
            <p className={styles.scroll_text}>Back to top</p>

            <button
              className={styles.scroll_button}
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
