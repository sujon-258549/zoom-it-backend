import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
  JWT_ACCESS_TOCEN: process.env.JWT_ACCESS_TOCEN,
  JWT_EXPIRE_IN_ACCESSTOKEN: process.env.JWT_EXPIRE_IN_ACCESSTOKEN,
  BCRYPC_HAS: process.env.BCRYPC_HAS,
};
