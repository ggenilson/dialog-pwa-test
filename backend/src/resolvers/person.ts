import { Resolver, Query, Arg } from 'type-graphql';

import data from '../database/data/db.json';

import { Person } from '../database';
import { IPerson } from '../database/entities/Person';

@Resolver(Person)
export default class UserResolver {
  @Query(() => [Person])
  allPersons(): IPerson[] {
    const res: IPerson[] = data.map(value => ({
      ...value,
    }));

    return res;
  }

  @Query(() => Person)
  async user(@Arg('id') id: string) {
    /* const users = await User.findOne({ where: { id } });

    return users;*/
  }
}
