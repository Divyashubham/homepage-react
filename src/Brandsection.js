import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useMediaQuery } from 'react-responsive';

const Brandsection = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1000px)'
  });
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  return (
    <section style={{height:'200px'}}>
     <div className="flexclass ">
             <div
              style={{
                padding: '5px',
                width: isDesktop ? '150px' : '110px'
              }}
            >
              <Skeleton duration={1} height={30} />
            </div>
            <div
              style={{
                padding: '5px',
                width: isDesktop ? '150px' : '110px'
              }}
            >
              <Skeleton duration={1} height={30} />
            </div>
          </div>
    <ul className="flexclass" >
     {Array(9)
              .fill()
              .map((item, index) => (
              <li className="boxclass" style={{display:isMobile?"none":"block"}}>
                  <li className="square">
               <Skeleton width={isDesktop ? '50px' : '25px'} height={isDesktop ? '50px' : '25px'} />
                      <p style={{ paddingTop: '4px', }}><Skeleton width={isDesktop ? '60px' : '60px'} height={'10px'} /></p>
   
                  </li>
                  
              </li>
                ))}
              </ul>

             <ul className="flexclass"  >
     {Array(4)
               .fill()
              .map((item, index) => (
              <li className="boxclass" style={{display:isMobile?"block":"none", width: isDesktop ? '115px' : '65px', height: isDesktop ? '115px' : '65px' }} >
                  <li className="square">
               <Skeleton width={isDesktop ? '50px' : '25px'} height={isDesktop ? '50px' : '25px'} />
                      <p style={{ paddingTop: '4px' }}><Skeleton width={isDesktop ? '60px' : '40px'} height={'10px'} /></p>
   
                  </li>
                  
              </li>
                
                ))}
              </ul>      

    </section>
  );
};

export default Brandsection;
