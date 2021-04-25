import { Box, Month, TypeTitle, HistoryContent, Line } from './History.styled';
import HistoryLog from './HistoryLog';

const History = () => {
  return (
    <Box>
      <Month>02월 </Month>

      <TypeTitle>문서</TypeTitle>

      <Line />
      <HistoryContent>
        <HistoryLog />
        <HistoryLog />
      </HistoryContent>
    </Box>
  );
};

export default History;
