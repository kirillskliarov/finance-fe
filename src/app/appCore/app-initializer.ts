import { SessionService } from './services/session.service';

export function appInitializer(sessionService: SessionService) {
  return () => sessionService.init();
}
