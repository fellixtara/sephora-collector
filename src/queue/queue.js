class Queue {

    constructor() {

        this.jobs = [];

    }

    push(job) {

        this.jobs.push(job);

    }

    pop() {

        return this.jobs.shift();

    }

    size() {

        return this.jobs.length;

    }

}

module.exports = new Queue();
