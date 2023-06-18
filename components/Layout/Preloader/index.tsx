'use client';

import React, { useEffect } from 'react';
import { preLoaderAnim } from '../animations';

interface PreLoaderTranslation {
  pr1: string;
  pr2: string;
  pr3: string;
  pr4: string;
  pr5: string;
  pr6: string;
  pr7: string;
}

const PreLoader = ({ pr1, pr2, pr3, pr4, pr5, pr6, pr7 }: PreLoaderTranslation) => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>{pr1} </span>
        <span>{pr2} </span>
        <span>{pr3} </span>
        <span>{pr4} </span>
        <span>{pr5} </span>
        <span>{pr6}</span>
        <span>{pr7}</span>
      </div>
    </div>
  );
};

export default PreLoader;
