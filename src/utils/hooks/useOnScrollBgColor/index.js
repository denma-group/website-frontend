// Libraries
import { useState, useEffect } from 'react';

// Dependencies
import { useThrottle } from 'utils/hooks/useThrottle';
import { mixColors } from 'utils/mixColors';

/**
 * `useOnScrollBgColor` is a hook that will mix two colors when the on scroll event listener triggers,
 * depending on the current scroll position, total scroll height given, and the colors to be mixed.
 * The on scroll event listener callback is throttled and set at a `100ms` duration.
 * @param {[string, string] | [number, string][]} colors `colors` accepts an array of two colors, or an array of tuples
 * structured as `[heightBreakpoint, colors]`. 
 * @param {{
 *  callback: (backgroundColor: string, bracketsTuple: [[number, string], [number, string]]) => void,
 *  scrollHeight: number,
 *  throttleLimit: number,
 *  shouldSort: boolean
 * }} settings Settings, each argument will:
 * - `callback`: Callback which sends the current background color, and the bracket, if any, as arguments.
 * - `scrollHeight`: Total scroll height, defaults to the entire body's height.
 * - `throttleLimit`: Throttle limit, in milliseconds, defaults to 100.
 * - `shouldSort`: shouldSort is a boolean that sorts the `colors` array of tuples by their height breakpoints,
 * from lower to higher. It defaults to false to save performance.
 */

export const useOnScrollBgColor = (
  colors = [],
  {
    callback,
    scrollHeight = document.body.clientHeight,
    throttleLimit = 100,
    shouldSort = false
  } = {}
  ) => {
  const [backgroundColor, setBackgroundColor] = useState(undefined);

  /**
   * `onThrottledScrollHandler` is the callback sent to the on scroll event listener.
   * - If `colors` is an array of two colors, then they will simply be mixed depending on the
   * current scroll position, and the `scrollHeight` parameter.
   * - If `colors` is an array of tuples (`[heightBreakpoint, colors]`),  then the algorithm
   * will calculate in which height breakpoint the scroll position is currently at, then mix
   * the colors of its upper end and lower end of its bracket. If the scroll position is at the
   * last bracket, no mixing will be made to save performance.
   */
  const onThrottledScrollHandler = () => {
    const currentScrollHeight = window.pageYOffset;
    const isTupleBreakpoints = Array.isArray(colors[0]);
    /**
     * If `colors` is an array of tuples, then we must mix the colors based on their
     * height breakpoints and which bracket `currentScrollHeight` is at.
     */
    if (isTupleBreakpoints) {
      /**
       * Sorting `colors` tuples by their height breakpoints if `shouldSort` is true.
       */
      if (shouldSort) colors.sort((colorTwo, colorOne) => colorTwo[0] - colorOne[0]);
      const colorTwoTuple = colors.find(colorTuple => currentScrollHeight <= colorTuple[0]) || colors[colors.length - 1];
      const indexOfColorTwo = colors.indexOf(colorTwoTuple);
      if (backgroundColor === colorTwoTuple[1]) {
        const mixedColors = colorTwoTuple[1];
        setBackgroundColor(mixedColors);
        if (callback) callback(mixedColors);
      } else {
        const colorOneTuple = colors[indexOfColorTwo - 1] || colors[0];
        /**
         * The mix ratio is basically at which percentage of the bracket the
         * current scroll height, or position, is at.
         */
        const mixRatio = ((currentScrollHeight - colorOneTuple[0]) / (colorTwoTuple[0] - colorOneTuple[0])) || 0;
        const mixedColors = mixColors(
          [colorOneTuple[1], colorTwoTuple[1]],
          // Mix ratio is capped at 1, it's redundant
          // since it should never happen, but just in case.
          mixRatio > 1 ? 1 : mixRatio
        );
        setBackgroundColor(mixedColors);
        /**
         * On top of sending `mixedColors` as an argument, we send `colorOneTuple`
         */
        if (callback) callback(mixedColors, [colorOneTuple, colorTwoTuple]);
      }
    /**
     * If `colors` is an array of strings, then we simply mix the two colors.
     */
    } else {
      const [colorOne, colorTwo] = colors;
      const mixRatio = currentScrollHeight / scrollHeight;
      const mixedColors = mixColors(
        [colorOne, colorTwo],
        // Capped at 1 for whenever `currentScrollHeight` is higher than `scrollHeight`
        mixRatio > 1 ? 1 : mixRatio
      );
      setBackgroundColor(mixedColors);
      if (callback) callback(mixedColors);
    }
  };

  const throttled = useThrottle(onThrottledScrollHandler, throttleLimit);
  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttled
    );
    return () => window.removeEventListener('scroll', throttled);
  });
  return backgroundColor;
};

// TODO: mixRatio should support mixing by specific RBG channels (e.g. only red, or only green and blue)
