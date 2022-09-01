const { faker } = require("@faker-js/faker");

exports.handler = async (event) => {
  const user = {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(user),
  };

  return response;
};
