import Head from 'next/head';
import React, { useState, FC } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
import {
  NotificationOutlined,
  UserOutlined,
  FileUnknownOutlined,
  EditOutlined,
  CopyOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import { Layout, Contents, Content, Sider, DashboardTitle } from './AdminLayout.styled';
import { Breadcrumb } from '~/atoms/breadcrumb';
import { AdminHeader } from './header';

import 'antd/dist/antd.css';

const StyleH1 = styled.h1`
  height: 29px;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.45px;
  color: #1b253a;
  background-color: #f5f7fa;
`;

const menuOptions = [
  {
    key: 'user',
    label: '회원 관리',
    children: [
      {
        key: 'users',
        label: '회원 목록',
        icon: <UserOutlined />,
      },
      {
        key: 'user-sanction',
        label: '회원 제재',
        icon: <NotificationOutlined />,
      },
    ],
  },
  {
    key: 'thread',
    label: '문서 관리',
    children: [
      {
        key: 'topics',
        label: '새 주제 제안 검토',
        icon: <FileUnknownOutlined />,
      },
      {
        key: 'topics-update',
        label: '수정 제안 검토',
        icon: <EditOutlined />,
      },
      {
        key: 'thread-regist',
        label: '등재 문서',
        icon: <CopyOutlined />,
      },
      {
        key: 'hash-tag',
        label: '해쉬 태그',
        icon: <TagsOutlined />,
      },
    ],
  },
  {
    key: 'debate',
    label: '토론 관리',
    children: [],
  },
];

const getMenuLabel = (key: string) => {
  let menuTitle;
  menuOptions.forEach(({ children: menuChildren }) => {
    menuChildren.forEach((subMenu) => {
      if (subMenu.key === key) {
        menuTitle = subMenu.label;
      }
    });
  });
  return menuTitle;
};

const AdminLayout: FC = ({ children }) => {
  const [collapsed, isCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('users');
  const [title, setTitle] = useState(getMenuLabel(selectedMenu));
  const router = useRouter();

  const selectMenu = (menu: string) => {
    setSelectedMenu(menu);
    router.push(`/admin/${menu}`, undefined, {
      shallow: true,
    });
  };

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>어드민 페이지</title>
      </Head>
      <AdminHeader />
      <Contents paddingTopPx={60}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => isCollapsed(!collapsed)}>
          <DashboardTitle>관리자용 대쉬보드</DashboardTitle>
          <Menu
            selectedKeys={[selectedMenu]}
            mode="inline"
            onClick={({ key }) => {
              if (typeof key === 'string') {
                selectMenu(key);
                setTitle(getMenuLabel(key));
              }
            }}
          >
            {menuOptions.map((menu) => {
              return (
                <Menu.ItemGroup key={menu.key} title={menu.label}>
                  {menu.children.map((childMenu) => {
                    return (
                      <Menu.Item key={childMenu.key} icon={childMenu.icon}>
                        {childMenu.label}
                      </Menu.Item>
                    );
                  })}
                </Menu.ItemGroup>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Breadcrumb options={menuOptions} />
            <StyleH1>{title}</StyleH1>
            {children}
          </Content>
        </Layout>
      </Contents>
    </Layout>
  );
};

export default AdminLayout;
