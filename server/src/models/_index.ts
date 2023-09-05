import connection from '../config/connection';
import itemCodesModel from './itemCodes';
import productCategoryModel from './productCategory';
import productsModel from './products';
import productUnitModel from './productUnit';
import stocksModel from './stocks';
import usersModel from './users';

const createTables = async (): Promise<void> => {
  try {
    const models = [
      usersModel,
      productUnitModel,
      productCategoryModel,
      productsModel,
      itemCodesModel,
      stocksModel,
    ];

    models.forEach(async (model) => {
      await connection.execute(model);
    });

    console.log(`Tables Sucessfully Synced`);
  } catch (err) {
    console.error(`Error executing SQL file:`, err);
  }
};

export default createTables;
