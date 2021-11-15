import { WebPlugin } from '@capacitor/core';

import type { AlarmClockPlugin } from './definitions';

export class AlarmClockWeb extends WebPlugin implements AlarmClockPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async createAlarm(): Promise<void> {
    throw this.unimplemented('create Alarm is not implemented on web.');
  }

  async startTimer(): Promise<void> {
    throw this.unimplemented('start Timer is not implemented on web.');
  }
}
