export class EventEmitter {
    sub(eventName, cb) {
        if (eventName, cb) {
            if (!this._events[eventName]) {
                this._events[eventName] = [];
            }
            this._events[eventName].push(cb);

            const unsub = () => {
                // можно сделать это в более функциональном стиле и добавить
                this._events[eventName] = this._events[eventName].filter((cbOnEvent) => cbOnEvent !== cb)
            }
            // можно добавить обработку случая, когда ты уже удалил этот обработчик с события и бросать ошибку
            return {unsub};
        }
        else {
            throw new Error("Can't sub to event, event name or callback function is missing")
        }
    }
    trigger(eventName, ...params) {
        if (this._events[eventName]) {
            // можно добавить отправку в cb - параметра, описывающего событие
            this._events[eventName].forEach((cb) => cb(...params));
        }
        else {
            throw new Error("Event you're trying to trigger doesn't exist")
        }
    }
    constructor() {
        this._events = {};
        Object.freeze(this);
    }
}

