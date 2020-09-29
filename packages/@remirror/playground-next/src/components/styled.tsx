/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import type { FC } from 'react';

export const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
`;

export const Main: FC = styled.div`
  flex: 1px;
  display: flex;
  background-color: #222437;
  overflow: hidden;
`;
