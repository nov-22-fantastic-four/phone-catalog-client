import React, { useContext, useState } from 'react';
import { type Phone } from '../../../types';
import { Image } from '../../shared/Image';
import cn from 'classnames';
import styles from './PhoneItem.module.scss';
import { PhoneInformation } from '../../shared/ProductCard/PhoneInformation';
import { CartContext, FavoritesContext } from '../../../context';

interface Props {
  phone: Phone | null,
};

export const PhoneItem: React.FC<Props> = ({ phone }) => {
  const cartContext = useContext(CartContext);
  const favoritesContext = useContext(FavoritesContext);

  if (!phone) {
    return <p>Loading...</p>;
  }

  const [selectedPhoto, setSelectedPhoto] = useState(phone.images[0]);
  //   const [selectedColor, setSelectedColor]
  //   = useState(phone.colorsAvailable[0]);

  const handleSelectedPhoto = (photo: string): void => {
    setSelectedPhoto(photo);
  };

  const {
    id,
    name,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = phone;

  const isAdded = cartContext.isAdded(+id);
  const isFavorite = favoritesContext.isFavorite(+id);

  const handleClickAdded = (): void => {
    if (isAdded) {
      cartContext.removeOne(+id);

      return;
    }

    cartContext.addOne(+id);
  };

  const handleClickLiked = (): void => {
    if (isFavorite) {
      favoritesContext.removeFavorite(+id);

      return;
    }

    favoritesContext.addFavorite(+id);
  };

  return (
    <>
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.container}>
        <div className={styles.photos}>
          <div className={styles.smallPhoto}>
            {phone?.images.map(photo => (
              <div key={phone.id} className={styles.photoContainer}>
                <Image
                  src={photo}
                  alt={name}
                  className={styles.photo}
                  onClick={() => { handleSelectedPhoto(photo); }}
                />
              </div>
            ))}
          </div>

          <div className={styles.selectedPhoto}>
            <Image
              src={selectedPhoto}
              alt={name}
              className={styles.mainPhoto}
            />
          </div>
        </div>

        <div className={styles.form}>
          <p className={styles.formTitle}>Available colors</p>

          <div className={styles.availableColor}>
            {phone?.colorsAvailable.map(currentColor => (
              <div key={id} className={styles.containerForColor}>
                <div
                  className={styles.color}
                  style={ { backgroundColor: currentColor }}
                ></div>
              </div>
            ))}
          </div>

          <div className={styles.lineForm}></div>

          <p className={styles.formTitle}>Select capacity</p>

          <div className={styles.availableCapacity}>
            {phone?.capacityAvailable.map(currentCapacity => (
              <button
                key={id}
                className={styles.capacity}
              >{currentCapacity}</button>
            ))}
          </div>

          <div className={styles.lineForm}></div>

          <div className={styles.prices}>
            <div className={styles.priceRegular}>
              ${priceRegular}
            </div>
            <div className={styles.priceDiscount}>
              ${priceDiscount}
            </div>
          </div>

          <div className={styles.buttonInfo}>
            <button
              className={cn({
                [styles.buttonAdded]: isAdded,
                [styles.button]: !isAdded
              })}
              onClick={handleClickAdded}
            >
              {isAdded
                ? 'Added'
                : 'Add to cart'}
            </button>

            <div
              className={styles.like}
              onClick={handleClickLiked}
            >
              <img
                alt="like"
                className={cn(styles.heartImg, {
                  [styles.heartImgActive]: isFavorite,
                })}
              />
            </div>
          </div>

          <div className={styles.phoneInfo}>
            <PhoneInformation
              text="Screen"
              value={screen}
            />

            <PhoneInformation
              text="Resolution"
              value={resolution}
            />

            <PhoneInformation
              text="Processor"
              value={processor}
            />

            <PhoneInformation
              text="RAM"
              value={ram}
            />
          </div>
        </div>
      </div>

      <div className={styles.containerInfo}>
        <div className={styles.about}>
          <h3 className={styles.titleInfo}>About</h3>
          <div className={styles.line}></div>

          <div className={styles.textContainer}>
            {phone.description.map(dec => (
              <>
                <h3 className={styles.textTitle}>{dec.title}</h3>

                {dec.text.map(el => (
                  <p key={el} className={styles.text}>{el}</p>
                ))}
              </>

            ))}
          </div>
        </div>

        <div className={styles.techSpecs}>
          <h3 className={styles.titleInfo}>Tech specs</h3>

          <div className={styles.line}></div>
          <div className={styles.phoneTechSpecs}>
            <PhoneInformation
              text="Screen"
              value={screen}
            />

            <PhoneInformation
              text="Resolution"
              value={resolution}
            />

            <PhoneInformation
              text="Processor"
              value={processor}
            />

            <PhoneInformation
              text="RAM"
              value={ram}
            />

            <PhoneInformation
              text="Built in memory"
              value={capacity}
            />

            <PhoneInformation
              text="Camera"
              value={camera}
            />

            <PhoneInformation
              text="Zoom"
              value={zoom}
            />

            <PhoneInformation
              text="Cell"
              value={cell}
            />
          </div>
        </div>
      </div>
    </>
  );
};
