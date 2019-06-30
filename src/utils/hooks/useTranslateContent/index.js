import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

/* 
	`useTranslateContent` takes an array of objects. each object has a flag translateY and multipliersY
*/

export const useTranslateContent = (multipliersY) => {
  const [translateYVals, setTranslateYVals] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  // use throthle
  const getValues = useCallback(() => {
    const { scrollY, innerHeight } = window;

    if (translateYVals > -innerHeight || scrollY <= lastScrollY) {
      const calculation = -multipliersY * scrollY;
      setTranslateYVals(calculation);
      setLastScrollY(scrollY);
    }
  }, [multipliersY, lastScrollY, translateYVals]);

  // throttled for performance
  const throttled = _.throttle(getValues, 150);
  useEffect(() => {
    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, [getValues, throttled]);

  return { translateYVals };
};
