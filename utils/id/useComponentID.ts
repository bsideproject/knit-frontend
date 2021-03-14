import { useState } from 'react';

let id = 1;

function generateId() {
  if (id === Number.MAX_SAFE_INTEGER) {
    id = 0;
  } else {
    id += 1;
  }
  return id;
}

export default function useComponentId() {
  const [componentId] = useState(() => `component-id-${generateId()}`);
  return componentId;
}
