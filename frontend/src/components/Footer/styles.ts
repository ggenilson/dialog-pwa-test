import styled, { css } from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    text-align: center;
    margin-top: 6.8rem;
    ${({ theme }) => css`
        color: ${theme.colors.neutral.white};
        padding: ${theme.spacings.small};
        background-color: ${theme.colors.neutral.extraLightGrey};
    `}
`;
