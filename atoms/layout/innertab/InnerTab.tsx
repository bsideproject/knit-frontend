import { useState } from 'react';
import { InnerTabContainer, TabButton, Divider } from './InnerTab.styled';

const innerTabs = ['문서', '토론', '질문'];
const InnerTab = () => {
  const [currentTab, setCurrentTab] = useState('문서');

  return (
    <InnerTabContainer>
      {innerTabs.map((tab, i) => (
        <>
          {i === 0 && (
            <TabButton
              key={i}
              selected={tab === currentTab}
              onClick={() => {
                setCurrentTab(tab);
              }}
            >
              {tab}
            </TabButton>
          )}
          {i !== 0 && (
            <TabButton key={i} selected={tab === currentTab}>
              {tab}
            </TabButton>
          )}
          {i !== innerTabs.length - 1 && <Divider />}
        </>
      ))}
    </InnerTabContainer>
  );
};

export default InnerTab;
