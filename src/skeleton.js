import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const SkeletonCard = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section>
      <ul className="list">
        {Array(3)
          .fill()
          .map((item, index) => (
            <li
              className="card"
              key={index}
              style={{
                width: isDesktop ? '33%' : '100%',
                margin: isDesktop ? '20px 0' : '10px 0',
                display: isDesktop ? 'block' : 'none'
              }}
            >
              <Skeleton height={200} />
            </li>
          ))}
      </ul>
      <ul className="list" style={{ display: isDesktop ? 'none' : 'block' }}>
        {Array(1)
          .fill()
          .map((item, index) => (
            <li
              className="card"
              key={index}
              style={{
                width: isDesktop ? '33%' : '100%',
                margin: isDesktop ? '20px 0' : '10px 0'
              }}
            >
              <Skeleton height={200} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default SkeletonCard;
