# Limits

Local-first still leaves traces in a few places. This page names them.

## Overview

``` mermaid
graph TD
  T[Salon: events on device] --> X1[Relay: ciphertext + route tokens]
  T --> X2[Push: no salon content]
  T --> X3[Sentry: anonymous crashes if you consent]
  T --> X4[Backup: only where you put the file / 24 words]
```

## Limitations

### What the Relay can and cannot see

- **Cannot see:** customers, appointments, invoices, prices, staff names.
  Nor which device signed, which store, or what kind of event.
- **Can see:** that two paired devices *are* exchanging packets, when,
  roughly how large, and from which IP.

**A route token does not name a store.** It is a random, revocable string and
is **not** derived from a store or device identity. Watching Relay traffic
does not reveal whose salon it belongs to.

Hiding IPs, timing, and packet sizes is something Salony does **not** do.
1.1.1 does not send traffic through a Relay, so those observations do not
apply yet. When internet sync returns, leaving it off keeps the salon on
Wi-Fi only.

### Notifications

Sync notifications show **while the app is open**: the *kind* of change —
**not** amounts. There is no background notification that carries
appointment content from a server.

### Backup is yours

Salony does not keep the 24 words, the file password, or a data copy. There
is no login account. See [Backup](../admin/backup.md).

### The on-device database is not encrypted on its own

End-to-end encryption protects events **in transit**. The database sitting on
the device is **not** given a second layer of its own — the screen lock and
the device account are that layer. An exported identity file *is* encrypted
with the password you set; a data backup is as safe as where you put it.

Which means: hand someone an unlocked device and they can read the salon. Set
a screen lock.

### Crash reports

The first launch asks **Crash & usage reports**. If you allow, anonymous
crashes may go to Sentry. They do **not** include customers, invoices, or
the event log.

## Related pages

- [Local-first](local-first.md)
- [Identity](identity.md)
- [FAQ](../reference/faq.md)
