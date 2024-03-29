const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const express = require("express");

// Construct a schema, using GraphQL schema language
const restaurants = [
  {
    id: 1,
    name: "WoodsHill ",
    description:
      "American cuisine, farm to table, with fresh produce every day",
    dishes: [
      {
        name: "Swordfish grill",
        price: 27,
      },
      {
        name: "Roasted Broccily ",
        price: 11,
      },
    ],
  },
  {
    id: 2,
    name: "Fiorellas",
    description:
      "Italian-American home cooked food with fresh pasta and sauces",
    dishes: [
      {
        name: "Flatbread",
        price: 14,
      },
      {
        name: "Carbonara",
        price: 18,
      },
      {
        name: "Spaghetti",
        price: 19,
      },
    ],
  },
  {
    id: 3,
    name: "Karma",
    description:
      "Malaysian-Chinese-Japanese fusion, with great bar and bartenders",
    dishes: [
      {
        name: "Dragon Roll",
        price: 12,
      },
      {
        name: "Pancake roll ",
        price: 11,
      },
      {
        name: "Cod cakes",
        price: 13,
      },
    ],
  },
];
const schema = buildSchema(`
type Query{
  restaurant(id: Int): restaurant
  restaurants: [restaurant]
},
type restaurant {
  id: Int
  name: String
  description: String
  dishes:[Dish]
}
type Dish{
  name: String
  price: Int
}
input restaurantInput{
  name: String
  description: String
}
type DeleteResponse{
  ok: Boolean!
}
type Mutation{
  setrestaurant(input: restaurantInput): restaurant
  deleterestaurant(id: Int!): DeleteResponse
  editrestaurant(id: Int!, name: String!): restaurant
}
`);
// The root provides a resolver function for each API endpoint

const root = {
  restaurant: ({ id }) => {
    // Search the restaurants array for a restaurant with the given id and return it
    return restaurants.find((restaurant) => restaurant.id === id);
  },
  restaurants: () => {
    // Return the full list of restaurants
    return restaurants;
  },
  setrestaurant: ({ input }) => {
    // Construct a new restaurant object with a unique id and the provided name and description
    const newRestaurant = {
      id: Math.max(...restaurants.map((restaurant) => restaurant.id)) + 1, // For the unique ID, get the maximum value of the restaurant's `id` property and increment that by 1.
      name: input.name,
      description: input.description,
      dishes: [], // The new restaurant will have an empty array for the `dishes` property.
    };
    // Add the new restaurant to the array
    restaurants.push(newRestaurant);
    // Return the newly added restaurant
    return newRestaurant;
  },
  deleterestaurant: ({ id }) => {
    // Find the index of the restaurant using the given `id`, with the help of the `findIndex` function.
    const index = restaurants.findIndex((restaurant) => restaurant.id === id);
    // If the restaurant is found, remove the restaurant from the `restaurants` array using the `splice` function and return the object { ok: true }
    if (index !== -1) {
      restaurants.splice(index, 1);
      return { ok: true };
    }
    // If the restaurant is not found, return the object { ok: false }
    return { ok: false };
  },
  editrestaurant: ({ id, name }) => {
    // Find the restaurant with the specified id using he `find` function.
    const existingRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    // If the restaurant exists, set the `name` property of the restaurant (`restaurant.name`) to the given `name` input. Then, return the restaurant object.
    if (existingRestaurant) {
      existingRestaurant.name = name;
      return existingRestaurant;
    }
    // If no restaurant was found with the id, return null (or consider throwing an error)
    return null;
  },
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
const port = 4000;
app.listen(4000, () => console.log("Running Graphql on Port:" + port));

module.exports = root;
