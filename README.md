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
* [`createAlarm(...)`](#createalarm)
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


### createAlarm(...)

```typescript
createAlarm(options: { message: string; hour: number; minutes: number; }) => any
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ message: string; hour: number; minutes: number; }</code> |

**Returns:** <code>any</code>

--------------------


### startTimer(...)

```typescript
startTimer(options: { message: string; seconds: number; }) => any
```

| Param         | Type                                               |
| ------------- | -------------------------------------------------- |
| **`options`** | <code>{ message: string; seconds: number; }</code> |

**Returns:** <code>any</code>

--------------------

</docgen-api>
