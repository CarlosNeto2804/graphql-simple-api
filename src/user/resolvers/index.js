const userResolvers = {
  Query: {
    users: (root, args, ctx, info) => {
      return ctx.dataSources.userApi.getUsers()
    },
    user: (root, args, ctx, info) => {
      return ctx.dataSources.userApi.getUserById(args.id)
    },
  },
};

module.exports = { userResolvers };
