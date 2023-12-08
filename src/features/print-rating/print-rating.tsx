import React from 'react';
import Icons from '../icons/icons';
import { RandomKey } from '../../utils/helpers';

interface IThisProps {
  rate: number;
  className?: string;
  successRating?: boolean;
}

function PrintRating({ rate, className, successRating }: IThisProps) {
  return (
    <div
      className={`d-flex justify-content-start align-items-center ${className ? className : ''}`}>
      {Array.from({ length: 5 }).map((i, index) => (
        <Icons
          key={RandomKey()}
          name="star"
          width={16}
          className={`${index < rate ? 'icon-yellow' : 'icon-grey'} me-1 ${
            successRating ? 'cursor-pointer' : ''
          }`}
        />
      ))}
    </div>
  );
}

export default PrintRating;
