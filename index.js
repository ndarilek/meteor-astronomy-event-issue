User = Astro.Class({
  name: "User",
  collection: Meteor.users,
  events: {
    "afterInsert": function() {
      console.log("Ran")
    }
  }
})

Meteor.startup(function() {
  console.log("About to create a user, but first do we have afterInsert?", User.hasEvent("afterInsert"))
  Accounts.createUser({username: Random.id(), password: Random.id()})
})