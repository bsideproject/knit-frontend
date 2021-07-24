import styled from '@emotion/styled';
import { Modal as AntdModal, Input } from 'antd';

const { Search: AntdSearch } = Input;

export const Container = styled.div`
  & > button {
    float: right;
  }
`;

export const Row = styled.div``;

export const Label = styled.div``;

export const Search = styled(AntdSearch)`
  width: 80%;
`;

export const Modal = styled(AntdModal)`
  .ant-modal-footer {
    & > button:first-of-type {
      margin-right: 10px;
    }
  }
`;
