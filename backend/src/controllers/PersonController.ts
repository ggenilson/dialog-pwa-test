import data from '../database/db.json';

import { IPerson } from '../database/entities/Person';

class PersonController {
  index() {
    const res: IPerson[] = data.map(value => ({
      ...value,
    }));

    return res;
  }

  show(name: string) {
    const res: any = data
      .map(value => {
        if (value.name.toLowerCase().indexOf(name.toLowerCase()) > -1) {
          return value;
        }
      })
      .filter(val => val !== undefined);

    console.log(res);

    return res;
  }
}

export default new PersonController();
