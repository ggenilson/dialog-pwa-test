import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

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

export const SearchTermInput = styled.div`
    display: flex;
    align-items: center;
    margin: 4rem 5vw;

    strong {
        font-size: 20px;
        margin-right: 20px;
    }
`;

export const SearchInput = styled.input`
    width: 150px;
    border-radius: 7px;
    border: 1px solid #ccc;
    transition: all 0.5s ease;

    &:focus {
        outline: none;
        width: 400px;
        border: 1px solid #000;
    }
`;
