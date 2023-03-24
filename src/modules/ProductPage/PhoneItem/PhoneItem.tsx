import React, { useContext, useEffect, useState } from 'react';
import { type Phone } from '../../../types';
import { Image } from '../../shared';
import cn from 'classnames';
import styles from './PhoneItem.module.scss';
import { PhoneInformation } from '../../shared/ProductCard/PhoneInformation';
import { CartContext, FavoritesContext } from '../../../context';
import { EmptyHeartIcon, FullHeartIcon } from '../../icons';
import { Link } from 'react-router-dom';
import { type ColorName, getColorHex } from '../../../utils';

interface Props {
  phone: Phone,
  isLoading?: boolean,
}

export const PhoneItem: React.FC<Props> = ({ phone, isLoading = false }) => {
  const cartContext = useContext(CartContext);
  const favoritesContext = useContext(FavoritesContext);

  const [selectedPhoto, setSelectedPhoto] = useState(phone.images[0]);

  const handleSelectedPhoto = (photo: string): void => {
    setSelectedPhoto(photo);
  };

  useEffect(() => {
    setSelectedPhoto(phone.images[0]);
  }, [phone]);

  const buildPhoneId = (
    namespace: string,
    capacity: string,
    color: string,
  ): string => (
    [namespace, capacity, color].join('-').toLowerCase()
  );

  const {
    productId,
    name,
    namespaceId,
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
    color,
  } = phone;

  const isAdded = cartContext.isAdded(productId);
  const isFavorite = favoritesContext.isFavorite(productId);
  const displayedId = productId.toString().padStart(6, '0');

  const handleClickAdded = (): void => {
    if (isAdded) {
      cartContext.removeOne(productId);

      return;
    }

    cartContext.addOne(productId);
  };

  const handleClickLiked = (): void => {
    if (isFavorite) {
      favoritesContext.removeFavorite(productId);

      return;
    }

    favoritesContext.addFavorite(productId);
  };

  return (
    <div className={cn({ [styles.loader]: isLoading })}>
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.container}>
        <div className={styles.photos}>
          <div className={styles.smallPhoto}>
            {phone.images.map(photo => (
              <div key={photo} className={styles.photoContainer}>
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
          <p className={styles.id}>
            {`ID: ${displayedId}`}
          </p>

          <p className={styles.formTitle}>Available colors</p>

          <div className={styles.availableColor}>
            {phone.colorsAvailable.map(currentColor => {
              const isSelected = currentColor === color;
              const linkId = buildPhoneId(namespaceId, capacity, currentColor);
              const backgroundColor =
                getColorHex(currentColor as ColorName) || currentColor;

              return (
                <Link
                  to={`/phones/${linkId}`}
                  key={currentColor}
                  className={cn(styles.containerForColor, {
                    [styles.selectedColor]: isSelected,
                  })}
                >
                  <div
                    className={styles.color}
                    style={ { backgroundColor }}
                  ></div>
                </Link>
              );
            })}
          </div>

          <div className={styles.lineForm}></div>

          <p className={styles.formTitle}>Select capacity</p>

          <div className={styles.availableCapacity}>
            {phone.capacityAvailable.map(currentCapacity => {
              const isSelected = currentCapacity === capacity;
              const linkId = buildPhoneId(namespaceId, currentCapacity, color);

              return (
                <Link
                  to={`/phones/${linkId}`}
                  key={currentCapacity}
                  className={cn(styles.capacity, {
                    [styles.selectedCapacity]: isSelected,
                  })}
                >
                  {currentCapacity}
                </Link>
              );
            })}
          </div>

          <div className={styles.lineForm}></div>

          <div className={styles.prices}>
            <div className={styles.priceRegular}>
              ${priceDiscount}
            </div>
            <div className={styles.priceDiscount}>
              ${priceRegular}
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
              {isFavorite
                ? <FullHeartIcon className={styles.fullHeart} />
                : <EmptyHeartIcon className={styles.emptyHeart} />}
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
            {phone.description.map(description => (
              <React.Fragment key={description.title}>
                <h3 className={styles.textTitle}>
                  {description.title}
                </h3>

                {description.text.map(text => (
                  <p key={text} className={styles.text}>
                    {text}
                  </p>
                ))}
              </React.Fragment>
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
    </div>
  );
};
