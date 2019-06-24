import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

/* 
	`useTranslateContent` takes an array of objects. each object has a flag translateY and multipliersY
*/

export const useTranslateContent = (data = [{ multipliersY: [-0.5], translateY: true }]) => {
  const [translateYVals, setTranslateYVals] = useState([]);
  // use throthle
  const getValues = useCallback(() => {
    const result = [];
    const { scrollY } = window;
    _.forEach(data, (object, i) => {
      // in case of fast scroll this will make sure its always visible when they scroll to top
      if (scrollY === 0) {
        result[i] = 0;
      }
      /** make sure the item in the array is in viewoprt by checking - `object.translateY` * */
      if (object.translateY) {
        result[i] = -object.multipliersY * scrollY;
      }
    });
    // modify state
    return setTranslateYVals(result);
  }, [data]);

  // throttled for performance
  const throttled = _.throttle(getValues, 1000);
  useEffect(() => {
    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, [getValues, throttled]);

  return { translateYVals };
};
