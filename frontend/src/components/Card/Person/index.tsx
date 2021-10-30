import { FC } from 'react';

import * as S from '../styles';
import * as C from '../../../pages/Main/styles';

import { PersonType } from 'src/pages/Main/types';

const Person: FC<PersonType> = person => {
    return (
        <C.PersonContainer>
            <img src={person.picture} alt="person-img" />
            <S.ListItem>
                <strong>Name: </strong> {person.name}
            </S.ListItem>
            <S.ListItem>
                <strong>Age: </strong> {person.age}
            </S.ListItem>
            <S.ListItem>
                <strong>Company: </strong> {person.company}
            </S.ListItem>
            <S.ListItem>
                <strong>Email: </strong> {person.email}
            </S.ListItem>
        </C.PersonContainer>
    );
};

export default Person;
