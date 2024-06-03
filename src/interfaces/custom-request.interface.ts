// Project: ada2b0612041fa27393aa211eafe379cded4a02a3c34ca43955869e65685dd29

import * as core from 'express-serve-static-core';
import type { Request } from 'express';

import type { User } from '@root/users/users.entity';

export interface CustomRequest<T = core.ParamsDictionary, K = undefined, L = undefined>
  extends Request<T, K, L> {
  currentUser?: User;
}
