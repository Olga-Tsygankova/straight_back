import { useState} from 'react';
import styles from './styles.module.css';
// import imageIceCream1 from '../../assets/Changer/IMAGE.png';
// import imageIceCream2 from '../../assets/Changer/IMAGE-1.png';
// import imageIceCream3 from '../../assets/Changer/IMAGE-2.png';
// import imageIceCream4 from '../../assets/Changer/IMAGE-3.png';

const iceCreamImages = [
	'/src/assets/Changer/IMAGE.png',
	'/src/assets/Changer/IMAGE-1.png',
	'/src/assets/Changer/IMAGE-2.png',
	'/src/assets/Changer/IMAGE-3.png'
]

export const Changer = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === iceCreamImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? iceCreamImages.length - 1 : prevIndex - 1
    );
  };

	return (
		<>
      <section className={styles.wrapper}>
				<button onClick={handlePrevious} className={`${styles.button} ${styles.previous}`}></button>
				<div className={styles.changer}>
        {iceCreamImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Ice Cream ${index + 1}`}
            className={`${styles.image} ${index === currentImageIndex ? styles.active : ''}`}
          />
        ))}
        </div>
        <button onClick={handleNext} className={`${styles.button} ${styles.next}`}></button>
			</section>
		</>
	)
}
