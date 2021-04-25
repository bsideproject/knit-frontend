import generateSessionId from './generateSessionId';

/**
 * timestamp 기반의 uuid를 생성한다.
 */
const generateUuid = () => {
  return Date.now() * 100 + (generateSessionId() % 100);
};

export default generateUuid;
