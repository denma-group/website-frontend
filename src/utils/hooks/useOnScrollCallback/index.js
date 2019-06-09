import { useState, useCallback, useEffect } from 'react';

// Dependencies
import { useThrottle } from '../useThrottle';

export const useOnScrollCallback = ({
  minimumOffset = 50, // Minimum height offset to actually execute the callback
  throttleLimit = 500, // Minimum time between calls in milliseconds
  callback
} = {}) => {
  const [scrollPosition, setScrollPosition] = useState(
    window.pageYOffset
  );

  const onThrottledScrollHandler = useCallback(() => {
    const currentScrollHeight = window.pageYOffset;
    setScrollPosition(currentScrollHeight);
    if (currentScrollHeight > minimumOffset) callback(scrollPosition);
  }, [minimumOffset, callback, scrollPosition]);

  const throttled = useThrottle(onThrottledScrollHandler, throttleLimit);

  useEffect(() => {
    window.addEventListener('scroll', throttled);

    // Return clause.
    return () => window.removeEventListener('scroll', throttled);
  }, [throttled]);
};
