import { registerPlugin } from '@capacitor/core';

import type { AlarmClockPlugin } from './definitions';

const AlarmClock3J = registerPlugin<AlarmClockPlugin>('AlarmClock3J', {
  web: () => import('./web').then(m => new m.AlarmClockWeb()),
});

export * from './definitions';
export { AlarmClock3J };
