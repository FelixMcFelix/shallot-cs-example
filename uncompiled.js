var Shallot = require("shallot-routing").Shallot;
var cs = new callstats(null,io,jsSHA);

//cs.initialize( 842748708,"CuXT/0zOOd9R:7TL8LgESzRqEDTZcIMh6IWta+qdhKe5wkLciF5yTQNw=", "testID");

window.s = new Shallot({
	chordConfig: {
		conductorConfig: {
			callstats: cs,
			callstats_app_id: 842748708,
			callstats_app_secret: "CuXT/0zOOd9R:7TL8LgESzRqEDTZcIMh6IWta+qdhKe5wkLciF5yTQNw="
		}
	}
});

var srv = prompt("Please specify a server:", "ws://mcfelix.me:7171")

s.join(srv)
	.then(
		() => {
			s.on("receiveConnection", conn => {
				window.conny = conn;
				console.log("Conny!");
				conn.on("data", data => console.log(`[DATA] Conny: ${data}`))
			})
		},

		err => {
			alert("Couldn't join chord server: "+err);
		}
	)
