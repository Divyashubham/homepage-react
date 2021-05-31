import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const ThreebannerSection = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section style={{ display: isDesktop ? 'block' : 'none',height:'300px' }}>
      <div className="container-box">
        <div style={{ width: '80%' }}>
          <div className="flexclass ">
            <div />
            <div
              style={{
                padding: '5px',
                width: isDesktop ? '150px' : '110px'
              }}
            >
              <Skeleton duration={1} height={30} />
            </div>
          </div>

          <ul className="list">
            {Array(3)
              .fill()
              .map((item, index) => (
                <li
                  className="card"
                  key={index}
                  style={{
                    width: '33%',
                    margin: '20px 0'
                  }}
                >
                  <Skeleton height={220} />
                </li>
              ))}
          </ul>
        </div>
        <div style={{ marginleft: '10px' }}>
          <Skeleton height={280} width={260} />
        </div>
      </div>
    </section>
  );
};

export default ThreebannerSection;
