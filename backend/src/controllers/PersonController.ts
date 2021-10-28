// import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
//import User from '../database/entities/User';

class UserController {
  async index(req: Request, res: Response) {
    //return res.json(await User.find());

    fetch(
      'https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow'
    )
      .then(resp => resp.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  async show(req: Request, res: Response) {
    return;
    return res.json(await User.findOne(req.params.id));
  }
}

export default new UserController();
