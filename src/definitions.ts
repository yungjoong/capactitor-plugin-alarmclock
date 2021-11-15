export interface AlarmClockPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  createAlarm(options: {message: string, hour: number, minutes: number}): Promise<void>;
  startTimer(options: {message: string, seconds: number}): Promise<void>;
}
