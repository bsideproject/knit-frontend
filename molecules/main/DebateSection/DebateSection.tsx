import Section from '../Section';
import DebateItem from './DebateItem';
import { reactSlickSettings } from './config';
import { DebateSlider } from './DebateSection.styled';
import data from '../_data';

const { debate } = data;

const DebateSection = () => {
  return (
    <Section title="진행중인 토론">
      <DebateSlider {...reactSlickSettings}>
        {debate.map(({ id, title, content, commentCount }) => {
          return (
            <DebateItem key={id} title={title} content={content} commentCount={commentCount} />
          );
        })}
      </DebateSlider>
    </Section>
  );
};

export default DebateSection;
