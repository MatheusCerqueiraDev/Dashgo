import faker from "faker";
import { ActiveModelSerializer, createServer, Factory, Model } from "miragejs";

interface UserProps {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<UserProps>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");

      this.get("/users/");

      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
