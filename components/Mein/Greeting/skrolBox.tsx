'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import greeting from './Greeting.module.scss';
import { stack } from '../../../utils/stacks';

export const ScrolBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1; // Швидкість прокручування, залежить від значення

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
    };

    let interval: NodeJS.Timeout;

    if (container) {
      interval = setInterval(scroll, 30); // Інтервал прокручування, залежить від значення

      container.addEventListener('mouseenter', () => {
        clearInterval(interval);
      });

      container.addEventListener('mouseleave', () => {
        interval = setInterval(scroll, 30);
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={greeting.greeting__left__platforms__box} ref={containerRef}>
      {stack.map((el) => (
        <Image
          key={el.img}
          className={greeting.greeting__platforms__box_image}
          src={el.img}
          width={40}
          height={40}
          alt=""
        />
      ))}
    </div>
  );
};
