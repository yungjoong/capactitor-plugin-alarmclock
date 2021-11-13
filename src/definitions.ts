export interface AlarmClockPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
