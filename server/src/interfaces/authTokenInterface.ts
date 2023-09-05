import { Request } from 'express';

interface userReq extends Request {
  user?: string;
}

export default userReq;
