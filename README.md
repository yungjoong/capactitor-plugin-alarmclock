# capactitor-plugin-alarmclock

안드로이드 알람시계 연동 플러그인

## Install

```bash
npm install capactitor-plugin-alarmclock
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`creatAlarm(...)`](#creatalarm)
* [`startTimer(...)`](#starttimer)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


### creatAlarm(...)

```typescript
creatAlarm(message: string, hour: number, minutes: number) => any
```

| Param         | Type                |
| ------------- | ------------------- |
| **`message`** | <code>string</code> |
| **`hour`**    | <code>number</code> |
| **`minutes`** | <code>number</code> |

**Returns:** <code>any</code>

--------------------


### startTimer(...)

```typescript
startTimer(message: string, seconds: number) => any
```

| Param         | Type                |
| ------------- | ------------------- |
| **`message`** | <code>string</code> |
| **`seconds`** | <code>number</code> |

**Returns:** <code>any</code>

--------------------

</docgen-api>
