import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const Imageslider = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section>
      <div style={{ width: '100%' }}>
        <Skeleton height={20} padding={4} />
      </div>

      <ul className="list">
        {Array(1)
          .fill()
          .map((item, index) => (
            <li
              className="card"
              key={index}
              style={{
                width: '100%',
                margin: '10px 0'
              }}
            >
              <Skeleton height={230} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Imageslider;
