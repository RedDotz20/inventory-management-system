import connection from '../config/connection';
import itemCodesModel from './itemCodes';
import productsModel from './products';

import usersModel from './users';

const createTables = async (): Promise<void> => {
  try {
    const models = [usersModel, productsModel, itemCodesModel];

    models.forEach(async (model) => {
      await connection.execute(model);
    });

    console.log(`Tables Sucessfully Synced`);
  } catch (err) {
    console.error(`Error executing SQL file:`, err);
  }
};

export default createTables;
