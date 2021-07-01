import mongoose, { Connection } from 'mongoose';

const databaseUri =
  process.env.NODE_ENV === 'dev'
    ? process.env.DB ?? 'mongodb://localhost:27017/'
    : 'mongodb://localhost:27017/';
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
