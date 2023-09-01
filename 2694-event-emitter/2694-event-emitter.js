class EventEmitter {
    map = new Map();

    subscribe(event, cb) {
        this.map.set(event, this.map.get(event) ?? []);
        const arr = this.map.get(event);
        arr.push(cb);
        return {
            unsubscribe: () => arr.splice(arr.indexOf(cb), 1),
        };
    }

    emit = (event, args = []) => this.map.get(event)?.map(o => o(...args)) ?? [];
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */