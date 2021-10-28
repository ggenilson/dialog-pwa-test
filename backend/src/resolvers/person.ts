import { Resolver, Query, Arg } from 'type-graphql';

import { Person } from '../database';

import PersonController from '../controllers/PersonController';

import { IPerson } from '../database/entities/Person';

@Resolver(Person)
export default class UserResolver {
  @Query(() => [Person])
  allPersons(): IPerson[] {
    return PersonController.index();
  }

  @Query(() => [Person])
  async person(@Arg('name') name: string) {
    return PersonController.show(name);
  }
}
