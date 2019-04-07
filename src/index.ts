import { Options } from "graphql-yoga";
import app from "./app";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGOUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGOUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

const handleAppStart = () => console.log(`Listening on port ${PORT}`);
app.start(appOptions, handleAppStart);
