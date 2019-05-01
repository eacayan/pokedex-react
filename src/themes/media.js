import { css } from 'styled-components';

const sizes = {
  xxs: 320,
  xs: 376,
  s: 600,
  m: 900,
  l: 1200,
  xl: 1800
}

function xxs(...args) {
  return css`
    @media(max-width: ${sizes.xxs}px) {
      ${css(...args)}
    }
  `;
}

function xs(...args) {
  return css`
    @media(min-width: ${sizes.xxs + 1}px) and (max-width: ${sizes.xs}px) {
      ${css(...args)}
    }
  `;
}

function s(...args) {
  return css`
    @media (min-width: ${sizes.xs + 1}px) and (max-width: ${sizes.s}px) {
      ${css(...args)}
    }
  `;
}

function m(...args) {
  return css`
    @media(min-width: ${sizes.s + 1}px) and (max-width: ${sizes.m}px) {
      ${css(...args)}
    }
  `;
}

function l(...args) {
  return css`
    @media(min-width: ${sizes.m + 1}px) and (max-width: ${sizes.l}px) {
      ${css(...args)}
    }
  `;
}

function xl(...args) {
  return css`
    @media(max-width: ${sizes.xl}px) {
      ${css(...args)}
    }
  `;
}

const media = {
  xxs,
  xs,
  s,
  m,
  l,
  xl
}

export default media;