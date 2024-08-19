import styled from "styled-components";

export const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  top: 0;
  height: auto;
  position: absolute;
  margin: 0;
`;

export const Poster = styled.div`
  width: 100%;
  height: 770px;
  position: relative;
  background-image: linear-gradient(
      270deg,
      rgba(${({ theme }) => theme.colors.darkRGB}) 14.11%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.875) 15.08%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.72) 16.51%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.294) 19.99%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.16) 21.88%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      rgba(${({ theme }) => theme.colors.darkRGB}) 13.6%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.984) 14.58%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.97) 15.44%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.867) 16.3%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.23) 22.87%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0) 26.64%
    ),
    linear-gradient(
      rgba(${({ theme }) => theme.colors.darkRGB}) 0%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.69) 4.66%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.44) 9.34%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.208) 15.16%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0) 24.22%
    ),
    linear-gradient(
      180deg,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0) 58.48%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.106) 63.17%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.235) 68.85%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.494) 78.08%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 0.74) 85.86%,
      rgba(${({ theme }) => theme.colors.darkRGB}, 1) 92.87%
    ),
    url(${({ backdrop }) => backdrop});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: ${({ theme }) => theme.media.forPoster.tablet}px) {
    height: 55vw;
  }
`;
