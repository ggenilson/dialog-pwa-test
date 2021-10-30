import { FC, useEffect, useState } from 'react';

import * as S from './styles';
import Card from '../../components/Card';
import { PersonType } from './types';

import { getPersons } from './utils';

const Main: FC = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        (async () => {
            const allPersons = await getPersons();

            setPersons(allPersons);
        })();
    }, []);
    return (
        <S.Wrapper>
            <S.Cards>
                {persons?.map((person: PersonType, index: number) => (
                    <li key={index}>
                        <Card {...person} />
                    </li>
                ))}
            </S.Cards>
        </S.Wrapper>
    );
};

export default Main;
