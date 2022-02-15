module.exports = (app) => {
  const baseRouter = require("./base.routes");
  app.use("/", baseRouter);

  const authRouter = require("./auth.routes");
  app.use("/", authRouter);

  const beachRouter = require("./beach.routes");
  app.use("/playa", beachRouter);

  const userRouter = require("./user.routes");
  app.use("/", userRouter);
};
