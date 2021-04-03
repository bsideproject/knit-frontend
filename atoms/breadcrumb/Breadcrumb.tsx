import React, { FC, useEffect, useState } from 'react';
import { Breadcrumb as ABradcrumb } from 'antd';
import { useRouter } from 'next/router';
import _ from 'lodash';

interface IBreadcrumbOption {
  key: string;
  label: string;
  children: Array<Omit<IBreadcrumbOption, 'children'>>;
}
interface BreadcrumbProps {
  options: Array<IBreadcrumbOption>;
}
const Breadcrumb: FC<BreadcrumbProps> = ({ options = [] }) => {
  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<
    Array<Omit<IBreadcrumbOption, 'children'>>
  >([]);
  const router = useRouter();
  const { subMenu: queryMenu } = router.query;

  useEffect(() => {
    if (_.size(options)) {
      options.forEach((menu) => {
        menu.children.forEach((subMenu) => {
          if (subMenu.key === queryMenu) {
            setCurrentBreadcrumb([menu, subMenu]);
          }
        });
      });
    }
  }, [queryMenu, options]);
  return (
    <ABradcrumb separator=">" style={{ margin: '16px 0' }}>
      {currentBreadcrumb.map(({ key, label }) => (
        <ABradcrumb.Item key={key}>{label}</ABradcrumb.Item>
      ))}
    </ABradcrumb>
  );
};

export default Breadcrumb;
