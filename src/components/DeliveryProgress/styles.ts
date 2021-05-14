/* eslint-disable no-nested-ternary */
import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  status?: 'pendente' | 'retirada' | 'cancelada' | 'entregue';
}

interface StatusProps {
  completed?: boolean;
  canceled?: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const ProgressBar = styled.View`
  justify-content: center;
  height: 12px;
  padding: 0 4px;
`;

export const Active = styled(Animated.View)<ContainerProps>`
  background: #00da6d;
  height: 2px;
  width: 0%;
  position: absolute;

  ${({ status }) =>
    status === 'retirada' &&
    css`
      width: 50%;
    `}

  ${({ status }) =>
    status === 'entregue' &&
    css`
      width: 100%;
    `}

  ${({ status }) =>
    status === 'cancelada' &&
    css`
      width: 100%;
      background: #f6c5cd;
    `}
`;

export const Inactive = styled.View`
  background: #dad7e0;
  height: 2px;
  width: 100%;
`;

export const Status = styled.View`
  margin-top: -12.5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Pending = styled.View<ContainerProps>`
  align-items: flex-start;
  margin-left: 0;
`;

export const Picked = styled.View<ContainerProps>`
  align-items: center;
  margin-left: -22px;
`;

export const Delivered = styled.View<ContainerProps>`
  align-items: flex-end;
`;
export const Text = styled.Text<StatusProps>`
  text-transform: uppercase;
  color: #dad7e0;
  font-family: 'Inter-Bold';
  margin-top: 8px;

  ${({ completed }) =>
    completed &&
    css`
      color: #00da6d;
    `}

  ${({ canceled }) =>
    canceled &&
    css`
      color: #f6c5cd;
    `}
`;

export const Canceled = styled.View`
  margin-top: -7px;
  justify-content: center;
  align-items: center;
`;
