import { FC, useEffect, useState } from 'react';

import * as S from './styles';
import Card from '../../components/Card';
import { PersonType } from './types';

import { getPersons, searchPerson } from './utils';
import Friends from 'src/components/Card/Friends';

const Main: FC = () => {
    const [persons, setPersons] = useState([]);
    const [search, setSearch] = useState('');
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        (async () => {
            const allPersons = await getPersons();

            setPersons(allPersons);
        })();
    }, []);

    async function handleSearch(value: string) {
        const filteredPersons = await searchPerson(value);

        setPersons(filteredPersons);
    }

    return (
        <S.Wrapper>
            <S.SearchTermInput>
                <strong>MySocial</strong>

                <S.SearchInput
                    placeholder="search persons ..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onBlur={() => handleSearch(search)}
                />

                {index > -1 && (
                    <S.Button onClick={() => setIndex(-1)}>Back</S.Button>
                )}
            </S.SearchTermInput>

            {index === -1 ? (
                <S.Cards>
                    {persons?.map((person: PersonType) => (
                        <li key={person.index}>
                            <Card person={person} getIndex={e => setIndex(e)} />
                        </li>
                    ))}
                </S.Cards>
            ) : (
                <Friends {...persons[index]} />
            )}
        </S.Wrapper>
    );
};

export default Main;
