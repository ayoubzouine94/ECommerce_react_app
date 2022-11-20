import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import mobile from '../../images/mobile.png'
import mobile1 from '../../images/mobile1.png'
import mobile2 from '../../images/mobile2.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGalery = () => {
    const images = [
        {
          original: `${mobile}`,
        },
        {
          original: `${mobile1}`,
        },
        {
          original: `${mobile2}`, 
        },
      ];
  return (
    <div className='product-gallary-card d-flex justify-content-center align-items-center'>
             <ImageGallery
              items={images} 
              defaultImage={mobile}
              showFullscreenButton={false}
              isRTL={true}
              showPlayButton={false}
              showThumbnails={false}
              renderLeftNav={LeftButton}
              renderRightNav={RightButton}
              
              />
    </div>
  )
}

export default ProductGalery