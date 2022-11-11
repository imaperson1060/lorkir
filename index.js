const open = require("open");
const ytdl = require("ytdl-core");

try {
	(async () => {
		const videoInfo = await ytdl.getInfo("dQw4w9WgXcQ");

		open(videoInfo.formats.find(x => x.itag == 140).url);
	})();
} catch (e) {}