module.exports = {
	name: "helper",

	events: {
		"hello.called"(payload) {
			this.logger.info("helper service caught an evennt");
			this.logger.info(payload);
		},
	},
};
