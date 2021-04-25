let id = 1;

/**
 * client browser session동안 unique한 id를 생선한다.
 */
const generateSessionId = () => {
  if (id === Number.MAX_SAFE_INTEGER) {
    id = 0;
  } else {
    id += 1;
  }
  return id;
};

export default generateSessionId;
