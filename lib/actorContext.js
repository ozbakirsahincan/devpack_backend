import { AsyncLocalStorage } from 'async_hooks';

const actorStorage = new AsyncLocalStorage();

export function setActorContext(actor, next) {
  actorStorage.run({ actor }, next);
}

export function getActor() {
  const store = actorStorage.getStore();
  return store?.actor || 'anonymous';
}
