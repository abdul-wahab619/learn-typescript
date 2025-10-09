abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getPhotoDetails(): string;
  getGeneralInfo(): string {
    return `Camera Mode: ${this.cameraMode}, Filter: ${this.filter}`;
  }
}

class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string, public burst: number = 1) {
    super(cameraMode, filter);
  }
  getPhotoDetails(): string {
    return `Camera Mode: ${this.cameraMode}, Filter: ${this.filter}, Burst: ${this.burst}`;
  }
}
const insta = new Instagram("Portrait", "Sepia");
insta.getPhotoDetails();
