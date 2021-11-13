import { WebPlugin } from '@capacitor/core';

import type { AlarmClockPlugin } from './definitions';

export class AlarmClockWeb extends WebPlugin implements AlarmClockPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
