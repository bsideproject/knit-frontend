import { useState } from 'react';

let id = 1;

const generateId = () => {
  if (id === Number.MAX_SAFE_INTEGER) {
    id = 0;
  } else {
    id += 1;
  }
  return id;
};

const useComponentID = () => {
  const [componentId] = useState(() => `component-id-${generateId()}`);
  return componentId;
};

export default useComponentID;
