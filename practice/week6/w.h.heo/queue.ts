type QueueWork = () => void;

export default class Queue {
  #queueItems: QueueWork[] = [];

  isWork: boolean = false;

  max: number;

  constructor(max?: number) {
    this.max = max || Number.MAX_SAFE_INTEGER;
  }

  add(work: QueueWork) {
    this.#queueItems.push(work);

    while (this.#queueItems.length > this.max) {
      this.#queueItems.shift();
    }

    setTimeout(() => this.run(), 1000);
  }

  shift() {
    return this.#queueItems.shift();
  }

  run() {
    if (this.isWork) return "작업 중!";

    if (!this.#queueItems.length) return "큐가 비어있습니다!";

    this.isWork = true;
    const item = this.#queueItems.shift();

    if (item) {
      item();
      this.isWork = false;
      this.run();
    }
  }
}
