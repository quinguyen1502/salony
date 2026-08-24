# Events and read models

What happened is written as a signed
[append-only](../reference/terminology.md#append-only)
[event](../reference/terminology.md#event). Screens read a
[read model](../reference/terminology.md#read-model).

## Overview

The app does **not** read the raw event stream on list/detail screens.

``` mermaid
graph TD
  A[You tap Approve invoice] --> B[A new event is signed]
  B --> C[Accepted event log]
  C --> D[Read model updates]
  D --> E[Invoice list]
  F[Wrong?] --> G[Compensating event: void / refund]
  G --> C
```

## Technical details

- There is no “edit the price on an approved invoice and overwrite”.
- Cancel, void, refund are new events — history stays.
- [seq](../reference/terminology.md#seq) is per identity per store.
- A broken read model rebuilds from accepted events.

## Limitations

The event log grows. The read model exists so the app does not scan all
history every time you open a list.

## Related pages

- [Local-first](local-first.md)
- [Sync](sync.md)
- [Terminology](../reference/terminology.md)
