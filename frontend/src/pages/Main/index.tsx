import React from 'react';

import * as S from './styles';
import Card from '../../components/Card';
import { IUserProps } from './types';

const users: IUserProps[] = [
    {
        name: 'José Gonçalves',
        age: 17,
        eyeColor: 'Bar',
        company: 'Foo',
        email: 'jgoncalves@dline-code.com',
    },
    {
        name: 'José Gonçalves',
        age: 17,
        eyeColor: 'Bar',
        company: 'Foo',
        email: 'jgoncalves@dline-code.com',
    },
    {
        name: 'José Gonçalves',
        age: 17,
        eyeColor: 'Bar',
        company: 'Foo',
        email: 'jgoncalves@dline-code.com',
    },
];

const Main: React.FC = () => (
    <S.Wrapper>
        <S.Cards>
            {users?.map((user: IUserProps, index: number) => (
                <li key={index}>
                    <Card {...user} />
                </li>
            ))}
        </S.Cards>
    </S.Wrapper>
);

export default Main;
