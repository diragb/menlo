// Packages:
import mongoose, { Schema } from "mongoose";

// Typescript:
import { EventInterface } from './ts/interfaces';

// Constants:
const EventSchema: Schema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now }
}, {
  timestamps: true,
});

// Exports:
export default mongoose.model<EventInterface>('Event', EventSchema);