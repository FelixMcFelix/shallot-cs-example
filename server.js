var Shallot = require("shallot-routing").Shallot,
	wrtc = require("wrtc"),
	SegfaultHandler = require("segfault-handler");

SegfaultHandler.registerHandler("crash.log");

var s = new Shallot({chordConfig:{
	conductorConfig: {
		rtc_facade: wrtc
	},

	isServer: true,

	allowUpgrade: false,

	debug: true
}});
