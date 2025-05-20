import { setActorContext } from '../lib/actorContext.js';

export default function prismaContextMiddleware(req, res, next) {
  const actor = req.user?.name || 'anonymous';
  setActorContext(actor, next); // tüm işlem boyunca erişilebilir hale gelir
}
