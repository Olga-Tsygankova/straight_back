import styles from './styles.module.css';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Wemake: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const lines = textRef.current.children;

      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(lines, { xPercent: -100, duration: 10, ease: 'linear' })
        .to(lines, { xPercent: 0, duration: 10, ease: 'linear' });

      gsap.to(lines, {
        duration: 20,
        xPercent: -20,
        ease: "linear",
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

	return (
		// <section className={styles.wrapper}>
		// 	<h2 className={styles.title}>We make ice cream the way it used to <br /> be.</h2>
		// </section>
		<div className={styles.wrapper}>
      <div className={styles.inside} ref={textRef}>
        {Array(30).fill(null).map((_, index) => (
          <div className={`${styles.subtitle} ${styles.noselect}`} key={index}>
            WE MAKE ICE CREAM THE WAY IT USED TO BE. WE MAKE ICE CREAM THE WAY IT USED TO BE. WE MAKE ICE CREAM THE WAY IT USED TO BE. WE MAKE ICE CREAM THE WAY IT USED TO BE. WE MAKE ICE CREAM THE WAY IT USED TO BE. WE MAKE ICE CREAM THE WAY IT USED TO BE.
          </div>
        ))}
			</div>
			<h2 className={styles.title}>WE MAKE ICE CREAM THE WAY IT USED TO <br /> BE.</h2>
    </div>
	);
};
