if (Meteor.isClient) {
  // counter starts at 0
    Session.setDefault("counter", 0);
    Session.setDefault("day", "nothing");
    Session.set("day", moment().format('MMM Do YYY'));

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });
    Template.date.helpers({
	day: function () {
	    return Session.get("day");
	}
    });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
