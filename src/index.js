import {EventEmitter} from "./EventEmitter";

const cb1 = console.log;
const cb2 = console.warn;

const ee = new EventEmitter();

const s1 = ee.sub("foo", cb1);
const s2 = ee.sub("foo", cb2);

ee.trigger("foo", 1, 2, 3);

s1.unsub();

ee.trigger("foo", 4, 5, 6);

s2.unsub();