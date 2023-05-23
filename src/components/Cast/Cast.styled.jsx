import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`;

export const Item = styled.li`
  flex-basis: 150px;
`;

export const Img = styled.img`
  margin-bottom: 8px;
  border-radius: 4px;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Character = styled.p`
  color: var(--accent);
`;
