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
	var xhr = new XMLHttpRequest();
	xhr.open("PUT", "", false);
	xhr.send();
    }
  });
    Template.yearprogressvis.rendered = function () {
	var svg, width = 500, height = 900;

	svg = d3.select('#daysinyear').append('svg').attr('width', width).attr('height', height);

	var y = 0, x = 0, i = 0, padding = 2;
	var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = now - start;
	var oneDay = 1000 * 60 * 60 * 24;
	var today = Math.floor(diff / oneDay);
	console.log(today);
	while (i < 365) {
	    var c;
	    if (i < today) {
		c = "#9c9c9c";
	    } else if (i == today) {
		c = "black";
	    } else {
		c = "#ececec";
	    }
	    
	    svg.append('circle').attr('cx', x + 10).attr('cy', y + 10).attr('r', 5).style("fill", c);
	    i += 1;
	    x += 10 + padding;
	    if (i % 7 == 0) {
		x = 0;
		y += 10 + padding;
	    }
	}
	
    };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
