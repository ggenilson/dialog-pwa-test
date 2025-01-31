import React from 'react';

import { PersonType } from 'src/pages/Main/types';

import * as S from './styles';

type CardType = {
    person: PersonType;
    getIndex?: (value: number) => void;
};

const Card: React.FC<CardType> = ({
    person: { index, name, age, eyeColor, company, email, picture },
    getIndex = () => {},
}) => {
    return (
        <S.CardWrapper onClick={() => getIndex(index)}>
            <S.CardImage src={picture} alt="user-img-thumb" />
            <S.CardOverlay className="card__overlay">
                <S.CardHeader className="card__header">
                    <S.CardArc xmlns="http://www.w3.org/2000/svg">
                        <path />
                    </S.CardArc>
                    <S.CardThumb src={picture} alt="person-img-thumb" />
                    <S.CardTitle>{name}</S.CardTitle>
                </S.CardHeader>
                <S.CardDescription>
                    <S.UserData>
                        <S.ListItem>
                            <strong>Age: </strong> {age}
                        </S.ListItem>
                        <S.ListItem>
                            <strong>EyeColor: </strong> {eyeColor}
                        </S.ListItem>
                        <S.ListItem>
                            <strong>Company: </strong> {company}
                        </S.ListItem>
                        <S.ListItem>
                            <strong>Email: </strong> {email}
                        </S.ListItem>
                    </S.UserData>
                </S.CardDescription>
            </S.CardOverlay>
        </S.CardWrapper>
    );
};

export default Card;
