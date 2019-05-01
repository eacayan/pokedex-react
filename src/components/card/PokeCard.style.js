import styled from 'styled-components';
import media from '../../themes/media';

export const Sprite = styled.img`
  width: 9em;
  height: 9em;
  display: none;

  ${media.l`
  width: 7em;
  height: 7em;
  display: none;
  `}
`;

export const Card = styled.div`
  border: solid 1px black;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.11), 0 1px 2px rgba(0, 0, 0, 0.22);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15);
  }
  user-select: none;
`;
export const CardList = styled.div`
  margin-top: 1em;
`;
