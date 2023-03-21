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
          {/* <h2 className={styles.title}>
          Connect with Us for Your Every Recruitment Need
          </h2> */}
          {/* <p className={styles.text}>
            Helping companies elevate their operations
            by directly delivering the ideal candidate.
          </p> */}

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
        </div>

        <div>
          <h2 className={styles.titleSmall}>How can we help?</h2>
          <form action="" method="get" className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Name:"
              className={styles.formField}
              required
            />
            <input
              type="email"
              placeholder="Email:"
              className={styles.formField}
              required
            />
            <textarea
              placeholder="Message"
              className={styles.textarea}
              name="message"
              required
            ></textarea>
            <button className={styles.button} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};
