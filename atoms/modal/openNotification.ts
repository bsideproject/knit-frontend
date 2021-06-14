import { notification } from 'antd';

type NotiType = 'success' | 'error' | 'info' | 'warning';

interface IMesaage {
  message: string;
  description: string;
}
const openNotification = (type: NotiType, message: IMesaage) => {
  notification[type](message);
};
export default openNotification;
