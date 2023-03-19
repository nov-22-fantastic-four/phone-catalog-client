import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import cn from 'classnames';
import { getOptionName } from './utils';
import { type Option } from '../../../types';

interface Props {
  selectedValue: string,
  options: Option[],
  onSelect: (value: string) => void,
}

export const Dropdown: React.FC<Props> = ({
  options,
  onSelect,
  selectedValue,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  const selectedName = getOptionName(options, selectedValue);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(current => !current);
  }, []);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const close = (event: MouseEvent): void => {
      const { target } = event;

      if (!dropdown.current?.contains(target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', close);

    return () => {
      document.removeEventListener('click', close);
    };
  }, [isExpanded]);

  return (
    <div
      className={styles.dropdown}
      ref={dropdown}
    >
      <div
        className={styles.trigger}
        onClick={toggleExpanded}
      >
        {selectedName}

        <img
          alt="arrow"
          className={cn({
            [styles.arrowDown]: !isExpanded,
            [styles.arrowUp]: isExpanded,
          })}
        />
      </div>

      {isExpanded && (
        <div className={styles.content}>
          {options.map(([name, value]) => (
            <div
              key={name}
              className={styles.item}
              onClick={() => {
                onSelect(value);
                toggleExpanded();
              }}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
