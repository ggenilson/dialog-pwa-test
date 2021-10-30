import GraphQL from '../../services';

export async function getPersons() {
    try {
        const res: any = await GraphQL.get(
            `
        allPersons {
            _id
            index
            picture
            age
            eyeColor
            name
            company
            email
            friends {
                _id
                index
                picture
                age
                eyeColor
                name
                company
                email
            }
        }
      `,
        );

        return res?.allPersons;
    } catch (err) {
        throw new Error('Something went wrong => ');
    }
}

export async function searchPerson(value: string) {
    try {
        const res: any = await GraphQL.get(
            `
            person (name:"${value}") {
                _id
                index
                picture
                age
                eyeColor
                name
                company
                email
                friends {
                    _id
                    index
                    picture
                    age
                    eyeColor
                    name
                    company
                    email
                }
            }
      `,
        );

        return res?.person;
    } catch (err) {
        console.log('Erro => ', err);
        throw new Error('Something went wrong');
    }
}
