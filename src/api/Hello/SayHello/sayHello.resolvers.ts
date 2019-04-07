import { Greeting } from "src/types/graph";

const resolvers = {
  Query: {
    sayHello: (): Greeting => {
      return {
        error: false,
        text: "love ya"
      };
    }
  }
};

export default resolvers;
