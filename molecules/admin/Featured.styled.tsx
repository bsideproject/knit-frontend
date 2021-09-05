import styled from '@emotion/styled';
import { Modal as AntdModal, Input, Table as ATable } from 'antd';

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

export const Table = styled(ATable)`
  .table-row-light {
    background-color: #ffffff;
  }
  .table-featured {
    background-color: rgb(105 205 195);
  }
`;
