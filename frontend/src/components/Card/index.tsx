import React from 'react';
import { IUserProps } from 'src/pages/Main/types';

import * as S from './styles';

const Card: React.FC<IUserProps> = ({
    name,
    age,
    eyeColor,
    company,
    email,
}) => {
    return (
        <S.CardWrapper href="#">
            <S.CardImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
            />
            <S.CardOverlay className="card__overlay">
                <S.CardHeader className="card__header">
                    <S.CardArc xmlns="http://www.w3.org/2000/svg">
                        <path />
                    </S.CardArc>
                    <S.CardThumb src="https://i.imgur.com/7D7I6dI.png" alt="" />
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
