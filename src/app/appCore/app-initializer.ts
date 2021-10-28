import { SessionService } from './session/session.service';

export function appInitializer(sessionService: SessionService) {
  return () => sessionService.init();
}
