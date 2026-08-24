# Local-first

The salon’s source of truth is **the device in your hand**. The network is a
side path.

## Overview

The network lets trusted devices exchange
[events](../reference/terminology.md#event) — it is not where invoices live.

``` mermaid
graph TD
  subgraph device [This device]
    E[Accepted events]
    M[Read model]
    U[App]
    E --> M --> U
  end
  CloudX[Cloud salon SaaS database]
  E -.->|not the source| CloudX
```

## Technical details

- Offline: bookings, bills, reports **still run**. Sync waits for a path.
- Salony does not keep a business copy of your salon.
- A second device has data because it **received events**.
- Deleting the app / losing the device without a [backup](../admin/backup.md) loses
  that device’s data.

## Limitations

Local-first does not mean “never touch a server”.
[Relay](../reference/terminology.md#relay) and crash reports (if you allow
them) are servers. They are **not** the source of truth. See
[Limits](limits.md).

## Related pages

- [Identity](identity.md)
- [Events and read models](events.md)
- [Terminology](../reference/terminology.md)
