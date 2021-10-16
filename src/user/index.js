const { UserApi } = require("./datasource");
const userSchema = require("./schema");
const { userResolvers } = require("./resolvers");

module.exports = {
  userSchema,
  userResolvers,
  userApi: new UserApi(),
};
