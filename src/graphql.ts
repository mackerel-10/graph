import { readFileSync } from "fs";
import Query from "./resolvers/query";
import SysmonEvent from "./resolvers/sysmonEvent";
import Source from "./resolvers/source";
import EventHeader from "./resolvers/event-header";
import Procedure from "./resolvers/procedure";

const typeDefs = readFileSync("./src/schemas.graphql", "utf-8");

// A map of functions which return data for the schema
const resolvers = {
  Query,
  // SYSMON_EVENT
  SysmonEvent,
  Source,
  EventHeader,
  // ETC
  Procedure,
};

export { typeDefs, resolvers };
