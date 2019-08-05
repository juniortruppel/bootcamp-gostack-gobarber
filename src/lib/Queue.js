import Bee from 'bee-queue';
import CancellationMail from '../jobs/CancellationMail';

class Queue {
  constructor() {
    this.queues = {};
    this.init();
  }

  init() {}
}

export default new Queue();
