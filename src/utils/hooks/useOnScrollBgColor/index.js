// Libraries
import { useEffect } from 'react';

// Dependencies
import { useThrottle } from 'utils/hooks/useThrottle';
import { mixColors } from 'utils/mixColors';

export const useOnScrollBgColor = (
  [colorOne, colorTwo],
  callback,
  limit = 100
  ) => {
  const onThrottledScrollHandler = () => {
    const totalPageHeight = document.body.clientHeight;
    const currentScrollHeight = window.pageYOffset;
    const mixRatio = currentScrollHeight / totalPageHeight;
    const mixedColors = mixColors(
      [colorOne, colorTwo],
      mixRatio // TODO: allow for specific mixing of only certain color channels
    );
    if (callback) callback(mixedColors);
  };

  const throttled = useThrottle(onThrottledScrollHandler, limit);
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttled
    );
    return () => window.removeEventListener('scroll', throttled);
  });
};
