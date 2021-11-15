export interface AlarmClockPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  createAlarm(message: string, hour: number, minutes: number): Promise<void>;
  startTimer(message: string, seconds: number): Promise<void>;
}
