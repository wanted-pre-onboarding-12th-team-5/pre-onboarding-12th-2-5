import styled from 'styled-components';
import React from 'react';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Layout({ children }: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`;
