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

        console.log('Resultado: ', res?.allPersons);

        return res?.allPersons;
    } catch (err) {
        console.log('Erro => ', err);
        throw new Error('Something went wrong');
    }
}
