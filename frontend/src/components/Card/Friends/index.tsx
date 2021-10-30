import { FC } from 'react';

import * as C from '../../../pages/Main/styles';

import Card from '..';
import CardPerson from '../Person';

import { PersonType } from 'src/pages/Main/types';

const Friends: FC<PersonType> = ({ friends, ...person }) => {
    return (
        <>
            <CardPerson {...person} />

            <C.TextFriends>List of all Friends</C.TextFriends>

            <C.Cards>
                {friends?.map((person: PersonType, index: number) => (
                    <li key={index}>
                        <Card person={person} />
                    </li>
                ))}
            </C.Cards>
        </>
    );
};

export default Friends;
