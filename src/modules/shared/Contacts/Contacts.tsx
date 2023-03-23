import React from 'react';
import styles from './Contacts.module.scss';
import { Container } from '../Container';
import { BreadCrumbs } from '../BreadCrumbs';
import { TelegramIcon } from '../../icons/TelegramIcon';
import { LinkedInIcon } from '../../icons/LinkedInIcon';

export const Contacts: React.FC = () => {
  return (
    <Container>
      <BreadCrumbs />

      <div className={styles.background}>
        Let&apos;s create something awesome together!
      </div>

      <h2 className={styles.title}>Get in touch</h2>

      <div className={styles.contacts}>
        <div className={styles.telegram}>
          <TelegramIcon />
          <span className={styles.social}> Telegram</span>
          <ul className={styles.contactsList}>
            <li className={styles.listItem}>
              <a
                href="https://t.me/nadzario"
                className={styles.contact}
              >
                Kyselevych Nazarii
              </a>
            </li>

            <li className={styles.listItem}>
              <a
                href="https://t.me/vanst1"
                className={styles.contact}
              >
                Stadnytskyi Ivan
              </a>
            </li>

            <li className={styles.listItem}>
              <a
                href="https://t.me/krstsss"
                className={styles.contact}
              >
                Kravchenko Anastasiia
              </a>
            </li>

            <li className={styles.listItem}>
              <a
                href="https://t.me/Olia_Zaiets"
                className={styles.contact}
              >
                Zaiets Olga
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.LinkedIn}>
          <LinkedInIcon />
          <span className={styles.social}>LinkedIn</span>
          <ul className={styles.contactsList}>
            <li className={styles.listItem}>
              <a
                href="https://www.linkedin.com/in/nzrii-kysel/"
                className={styles.contact}
              >
                Kyselevych Nazarii
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://www.linkedin.com/in/ivan-stadnytskyi-287ab7265/"
                className={styles.contact}
              >
                Stadnytskyy Ivan
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                // eslint-disable-next-line max-len
                href="https://www.linkedin.com/in/anastasiia-kravchenko-959b0a252/"
                className={styles.contact}
              >
                Kravchenko Anastasiia
              </a>
            </li>
            <li className={styles.listItem}>
              <a
                href="https://www.linkedin.com/in/olga-zaiets-009a261ab/"
                className={styles.contact}
              >
                Zaiets Olga
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
