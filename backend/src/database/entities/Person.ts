import { ObjectType, Field } from 'type-graphql';

export interface IPerson {
  _id: string;
  index: number;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  friends?: Omit<IPerson[], 'friends'>;
}

@ObjectType()
export default class Person {
  @Field(() => String)
  _id: string;

  @Field(() => Number)
  index: number;

  @Field(() => String)
  picture: string;

  @Field(() => Number)
  age: number;

  @Field(() => String)
  eyeColor: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  company: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone: string;

  @Field(() => [Person])
  friends: Omit<Person[], 'friends'>;
}
