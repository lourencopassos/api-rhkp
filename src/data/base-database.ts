import mongoose, { Connection } from 'mongoose';

const databaseUri =
  process.env.ENVIROMENT === 'dev'
    ? process.env.DB ?? 'http://localhost:27017/'
    : 'http://localhost:27017/';

export abstract class BaseDatabase {
  public getConnection = async (): Promise<Connection> => {
    await mongoose.connect(databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = mongoose.connection;

    db.on('error', (error) => {
      console.log(error);
    });

    db.once('open', () => {
      console.log('Database connected');
    });
    return db;
  };
}
