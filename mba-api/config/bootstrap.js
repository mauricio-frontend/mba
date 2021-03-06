/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  if (await Tasks.count() > 0) {
    return done();
  }

  if (await Peoples.count() > 0) {
    return done();
  }

  await Tasks.createEach([
    {name: 'Task 001', description: 'Description Task 001',},
    {name: 'Task 002', description: 'Description Task 002'},
    {name: 'Task 003', description: 'Description Task 003'},
  ]);


  await Peoples.createEach([
    {name: 'José', tasks: []},
    {name: 'Maria', tasks: []}
  ]);
  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
