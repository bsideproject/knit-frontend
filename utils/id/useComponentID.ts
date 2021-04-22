import { useState } from 'react';
import generateSessionId from './generateSessionId';

const useComponentID = () => {
  const [componentId] = useState(() => `component-id-${generateSessionId()}`);
  return componentId;
};

export default useComponentID;
