import style from 'styled-components';

export const ImgStyleNormal = style.div`
  text-align: center;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const ImgStyleMin = style.div`
  border-radius: 50%;
  margin-bottom: 20px;
  transform: scale(0.9,0.9);
  font-size: 1px;
`;