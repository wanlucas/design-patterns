// Subsistemas complexos
class AudioSystem {
	turnOn(): void {
		console.log("Audio on");
	}
	turnOff(): void {
		console.log("Audio off");
	}
}

class VideoSystem {
	turnOn(): void {
		console.log("Video on");
	}
	turnOff(): void {
		console.log("Video off");
	}
}

class LightSystem {
	turnOn(): void {
		console.log("Lights on");
	}
	turnOff(): void {
		console.log("Lights off");
	}
}

// Facade
class HomeTheaterFacade {
	private audio: AudioSystem;
	private video: VideoSystem;
	private light: LightSystem;

	constructor(audio: AudioSystem, video: VideoSystem, light: LightSystem) {
		this.audio = audio;
		this.video = video;
		this.light = light;
	}

	watchMovie(): void {
		console.log("Getting ready to watch a movie...");
		this.light.turnOn();
		this.audio.turnOn();
		this.video.turnOn();
		console.log("Movie started!");
	}

	endMovie(): void {
		console.log("Ending movie session...");
		this.video.turnOff();
		this.audio.turnOff();
		this.light.turnOff();
		console.log("Session ended!");
	}
}

const audio = new AudioSystem();
const video = new VideoSystem();
const light = new LightSystem();

const homeTheater = new HomeTheaterFacade(audio, video, light);
homeTheater.watchMovie();
console.log("-----");
homeTheater.endMovie();
