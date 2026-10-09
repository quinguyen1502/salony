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
1.2.0 does not send traffic through a Relay, so those observations do not
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

### Public booking page (opt-in)

**Settings → Online booking**. The page holds a brochure (name, address,
phone, hours, logo, public description, selected services) and pending
requests. Appointments, customers, notes, and the event log stay on the
device. See [Online booking](../admin/online-booking.md).

The cloud also caps requests, emails, alerts, publishes, photos, stores,
and groups: see [Safety limits](../admin/online-booking.md#safety-limits).
Phone numbers and email addresses are counted as keyed hashes, never
stored as written.

### Running the cloud yourself

If you host the booking cloud and the licence issuer yourself (the
self-hosted stack in `deploy/self-host`), every limit above is a setting
in its `.env`:

- `LIMIT_STORE_REQUESTS_PER_DAY`, `LIMIT_STORE_MAIL_PER_DAY`, and the
  other `LIMIT_*` names, each listed with its default. An empty value
  keeps the default; `0` turns off what the limit guards.
- `QUOTA_HASH_SECRET` keys the phone and email counters. It is required
  with a database. Changing it only restarts the current day's counts.

`node tool/quota-report.js` in the booking service prints, for each limit,
the stores, accounts, or groups using the most of it. It only reads, and
it shows ids and link names, never a customer's name, phone, email, or
note. Phone and email counters appear only as a count.

### Crash reports

The first launch asks **Crash & usage reports**. If you allow, anonymous
crashes may go to Sentry. They do **not** include customers, invoices, or
the event log.

## Related pages

- [Local-first](local-first.md)
- [Identity](identity.md)
- [Online booking](../admin/online-booking.md)
- [FAQ](../reference/faq.md)
