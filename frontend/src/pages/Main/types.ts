export type IUserProps = {
    name: string;
    age: number;
    eyeColor: string;
    company: string;
    email: string;
};

export type PersonType = {
    _id: string;
    index: number;
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    company: string;
    email: string;
    phone?: string;
    friends?: Omit<PersonType[], 'friends'>;
};
