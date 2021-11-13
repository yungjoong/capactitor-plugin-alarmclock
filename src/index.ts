import { registerPlugin } from '@capacitor/core';

import type { AlarmClockPlugin } from './definitions';

const AlarmClock = registerPlugin<AlarmClockPlugin>('AlarmClock', {
  web: () => import('./web').then(m => new m.AlarmClockWeb()),
});

export * from './definitions';
export { AlarmClock };
