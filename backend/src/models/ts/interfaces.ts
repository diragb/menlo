// Packages:
import { Document } from 'mongoose';

// Exports:
export interface EventInterface extends Document {
  _id: String;
  title: String;
  description: String;
  price: Number;
  date: Date;
};
