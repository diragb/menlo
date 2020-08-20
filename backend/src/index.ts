import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import "./lib/env";

import Event from './models/event.model';

const app: Application = express();
const PORT: any = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", graphqlHTTP({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: async () => {
      try {
        const events = await Event.find();
        return events.map(event => {
          return {
            _id: event.id,
            title: event.title,
            description: event.description,
            price: event.price,
            date: event.date
          };
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    createEvent: async (args: any) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
      });

      try {
        const result = await event.save();
        return {
          _id: result.id,
          title: result.title,
          description: result.description,
          price: result.price,
          date: result.date
        };
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  },
  graphiql: true,
}))

const ATLAS_URI: string = process.env.ATLAS_URI!;
mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connection between server and mongodb established");
});

// TODO: Handle server re-routing for all /* requests that are NOT /api/
// https://ui.dev/react-router-cannot-get-url-refresh/
// app.get('/*', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, 'path/to/your/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// });

// app.get("/api", (req: Request, res: Response, next: NextFunction) => {
//   res.send("hello");
// });

app.listen(PORT, () => console.log("running"));
