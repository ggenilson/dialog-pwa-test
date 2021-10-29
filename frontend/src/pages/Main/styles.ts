import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Cards = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
`;

export const Form = styled.form`
    position: relative;
    width: 30rem;
    background: #57bd84;
    border-radius: 0.7rem;
`;

export const searchTermInput = styled.input``;

export const SearchButton = styled.button``;
