import React from 'react';
import styles from './Contacts.module.scss';
import { Container } from '../Container';
import { BreadCrumbs } from '../BreadCrumbs';
import { PageTitle } from '../PageTitle';

export const Contacts: React.FC = () => {
  return (
    <Container>
      <BreadCrumbs />

      <PageTitle>
        Contacts
      </PageTitle>

      <div className={styles.container}>
        <div className={styles.ourContacts}>
          <p className={styles.text}>Telegram:</p>

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
                Stadnytskyy Ivan
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
                Zaiets Olya
              </a>
            </li>
          </ul>

          <p className={styles.text}>LinkedIn:</p>

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
                Zaiets Olya
              </a>
            </li>
          </ul>
        </div>

        <div>
          <img
            className={styles.photo}
            // eslint-disable-next-line max-len
            src="https://cdn.discordapp.com/attachments/1084940437254578336/1087782359606239233/6a91d394ddaef4c0b5f931e31847f0bf.png"
            alt="" />
        </div>
      </div>
    </Container>
  );
};
