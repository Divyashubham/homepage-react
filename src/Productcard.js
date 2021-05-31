import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const ProductCard = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section>
      <div class="section-title">
        <div />
        <div
          class="buttonclass"
          style={{
            padding: '5px',
            width:isDesktop ? '150px':'110px',
            
          }}
        >
          <Skeleton duration={1} height={30} />
        </div>
      </div>

      <ul className="list">
        {Array(7)
          .fill()
          .map((item, index) => (
            <li
              className="card"
              key={index}
              style={{
                width: isDesktop ? '12%' : '45%',
                margin: '10px  10px',
                display: isMobile ? 'none' : 'block'
              }}
            >
              <Skeleton height={150} />
              <h4 className="card-title">
                <Skeleton height={10} width={`100%`} />
              </h4>
              <p className="card-channel" style={{  marginright: "10px",
   marginleft:"0px", margintop: "30px"}}>
                <Skeleton height={10} width={`100%`} />
              </p>
              <div className="card-metrics">
                <Skeleton height={10} width={`100%`} />
              </div>
            </li>
          ))}
      </ul>

      {/* mobile */}

      <ul className="list">
        {Array(4)
          .fill()
          .map((item, index) => (
            <li
              className="card"
              key={index}
              style={{
                width: isDesktop ? '14%' : '40%',
                margin: '20px 10px',
                display: isDesktop ? 'none' : 'block'
              }}
            >
              <Skeleton height={150} />
              <h4 className="card-title">
                <Skeleton height={10} width={`100%`} />
              </h4>
              <p className="card-channel">
                <Skeleton height={10} width={`100%`} />
              </p>
              <p className="card-metrics">
                <Skeleton height={10} width={`100%`} />
              </p>
              <p className="card-metrics">
                <Skeleton height={10} width={`100%`} />
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ProductCard;
