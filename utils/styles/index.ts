import type { SerializedStyles } from '@emotion/react';

interface CssMap {
  [key: string]: SerializedStyles;
}
export const resolveProp = (propName: string, cssMap: CssMap) => {
  return (props: Record<string, any>) => {
    if (!Object.hasOwnProperty.call(props, propName)) return cssMap.default ?? null;
    return cssMap[props[propName]] ?? cssMap.default ?? null;
  };
};
