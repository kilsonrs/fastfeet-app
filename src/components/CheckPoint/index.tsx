import React, { useMemo } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Container, UnChecked } from './styles';

interface CheckPointProps {
  completed: boolean;
}

const CheckPoint: React.FC<CheckPointProps> = ({ completed }) => {
  const tintColor = useMemo(() => {
    return completed === false ? '#dad7e0' : '#00da6d';
  }, [completed]);

  const lineWidth = useMemo(() => {
    return completed === false ? 2 : 4;
  }, [completed]);

  return (
    <Container>
      {completed && (
        <AnimatedCircularProgress
          style={{ backgroundColor: '#fff' }}
          size={14}
          duration={2000}
          width={lineWidth}
          fill={100}
          rotation={270}
          lineCap="square"
          tintColor={tintColor}
          backgroundColor="#dad7e0"
        />
      )}
      {!completed && <UnChecked />}
    </Container>
  );
};

export default CheckPoint;
