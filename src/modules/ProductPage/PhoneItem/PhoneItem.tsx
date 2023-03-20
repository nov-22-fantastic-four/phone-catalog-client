import React, { useState } from 'react';
import { type Phone } from '../../../types';
import { Image } from '../../shared/Image';
// import { CartContext, FavoritesContext } from '../../../context';
import cn from 'classnames';
import styles from './PhoneItem.module.scss';
import { PhoneInformation } from '../../shared/ProductCard/PhoneInformation';

interface Props {
  phone: Phone | null,
};

export const PhoneItem: React.FC<Props> = ({ phone }) => {
  //   const [selectedPhoto, setSelectedPhoto] = useState(phone?.images[0]);
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickAdded = (): void => {
    setIsAdded(!isAdded);
  };

  const handleClickLiked = (): void => {
    setIsFavorite(!isFavorite);
  };

  //   const handleClickAdded = (src: string): void => {
  //     setSelectedPhoto(src);
  //   };

  return (
    <>
      <h2 className={styles.title}>{phone?.name}</h2>

      <div className={styles.container}>
        <div className={styles.photos}>
          <div className={styles.smallPhoto}>
            {phone?.images.map(photo => (
              <div key={phone.id} className={styles.photoContainer}>
                <Image
                  src={photo}
                  alt={phone?.name}
                  className={styles.photo}
                //   onClick={() => { handleClickAdded(photo); }}
                />
              </div>
            ))}
          </div>

          <div className={styles.selectedPhoto}>
            <Image
              src={phone?.images[0]}
              alt={phone?.name}
              className={styles.mainPhoto}
            />
          </div>
        </div>

        <div className={styles.form}>
          <p className={styles.formTitle}>Available colors</p>

          <div className={styles.availableColor}>
            {phone?.colorsAvailable.map(currentColor => (
              <button
                key={phone.id}
                className={styles.color}
                style={ { backgroundColor: currentColor }}
              ></button>
            ))}
          </div>

          <div className={styles.lineForm}></div>

          <p className={styles.formTitle}>Select capacity</p>

          <div className={styles.availableCapacity}>
            {phone?.capacityAvailable.map(currentCapacity => (
              <button
                key={phone.id}
                className={styles.capacity}
              >{currentCapacity}</button>
            ))}
          </div>

          <div className={styles.lineForm}></div>

          <div className={styles.prices}>
            <div className={styles.priceRegular}>
              ${phone?.priceRegular}
            </div>
            <div className={styles.priceDiscount}>
              ${phone?.priceDiscount}
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
            {phone && (
              <PhoneInformation
                text="Screen"
                value={phone?.screen}
              />
            )}

            {phone && (
              <PhoneInformation
                text="Resolution"
                value={phone?.resolution}
              />
            )}

            {phone && (
              <PhoneInformation
                text="Processor"
                value={phone?.processor}
              />
            )}

            {phone && (
              <PhoneInformation
                text="RAM"
                value={phone?.ram}
              />
            )}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.about}>
          <h3 className={styles.titleInfo}>About</h3>
          <div className={styles.line}></div>

        </div>

        <div className={styles.techSpecs}>
          <h3 className={styles.titleInfo}>Tech specs</h3>

          <div className={styles.line}></div>
          <div className={styles.phoneTechSpecs}>
            {phone && (
              <PhoneInformation
                text="Screen"
                value={phone?.screen}
              />
            )}

            {phone && (
              <PhoneInformation
                text="Resolution"
                value={phone?.resolution}
              />
            )}

            {phone && (
              <PhoneInformation
                text="Processor"
                value={phone?.processor}
              />
            )}

            {phone && (
              <PhoneInformation
                text="RAM"
                value={phone?.ram}
              />
            )}

            {phone && (
              <PhoneInformation
                text="Built in memory"
                value={phone?.capacity}
              />
            )}

            {phone && (
              <PhoneInformation
                text="Camera"
                value={phone?.camera}
              />
            )}

            {phone && (
              <PhoneInformation
                text="Zoom"
                value={phone?.zoom}
              />
            )}
            {/* capacity!!! */}
          </div>
        </div>
      </div>
    </>
  );
};
