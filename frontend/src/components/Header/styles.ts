import styled, { css } from 'styled-components';

export const HeroImage = styled.div`
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    ${({ theme }) => css`
        padding: ${theme.spacings.xxlarge};
        background: ${theme.colors.linear.dark},
            url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
    `}
`;

export const HeroContents = styled.div`
    ${({ theme }) => {
        return css`
            text-align: center;
            color: ${theme.colors.neutral.white};

            h1 {
                text-transform: uppercase;
                font-size: ${theme.font.sizes.xxxlarge};
            }
        `;
    }}
`;
