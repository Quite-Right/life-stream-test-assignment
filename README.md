# Lifestream test assignment
Event Emitter
Описание:
Cуть паттерна - создать механизм управления событиями. Event Emitter должен предоставлять удобный интерфейс для “подписки” на событие. На одно событие может быть “подписано” любое количество слушателей. Не зависимо от того, сколько слушателей у события, друг о друге они нечего не знают.Функционал состоит из методов:
- sub(eventName, cb), который реализует подписку на событие 
- unsub, который позволяет отписать от события добавленный cb 
- trigger(eventName, ...params) вызывает все подписки для заданного события 
  
Пример использования: 
const cb1 = console.log;
  const cb2 = console.warn;

  const ee = new EventEmitter();

  const s1 = ee.sub("foo", cb1);
  const s2 = ee.sub("foo", cb2);

  ee.trigger("foo", 1, 2, 3);

  s1.unsub();

  ee.trigger("foo", 4, 5, 6);

  s2.unsub();
