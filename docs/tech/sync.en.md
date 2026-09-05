# Sync

Trusted devices exchange accepted events, inside an
[envelope](../reference/terminology.md#envelope) after a
[Noise](../reference/terminology.md#noise)
[handshake](../reference/terminology.md#handshake).

## Overview

1.0.0 syncs **Nearby / LAN** only. The
[Relay](../reference/terminology.md#relay) is not hosted, so it is not
offered. The diagram below is the mechanism that will return — not a
control you can turn on today.

Relay forwards [ciphertext](../reference/terminology.md#ciphertext). It does
**not** read customers, bookings, or invoices.

``` mermaid
sequenceDiagram
  participant A as Device A
  participant R as Relay
  participant B as Device B
  A->>B: Nearby / LAN: Noise then events
  A->>R: Opaque envelope
  Note over R: Holds ciphertext for a few hours<br/>cannot read it
  B->>R: Fetch envelope
  B->>B: Noise, then accept the event
```

## Technical details

1. **Nearby / LAN** — same Wi-Fi (or QR when multicast is blocked). App
   open. This is the 1.0.0 path.
2. **Relay** — not in 1.0.0. When hosted, devices not on the same network
   turn on **Sync over the internet** on *each* device
   ([online mode](../reference/terminology.md#online-mode)).
3. **There is no “upload the salon to a cloud then download” layer.**

The Noise handshake happens **before** events are released. TLS to Relay is
not enough: Relay terminates TLS.

Pair with QR. When internet sync returns, turning online mode off on one
device does not turn it off on another.

### Both devices must prove who they are

A completed handshake is not enough. It only says "the other end holds this
X25519 key". The device must further prove that key belongs to the paired
**Ed25519 identity**. Until it does, no event is released.

### Listening today does not open yesterday

Every session uses fresh ephemeral keys. Capture a day of ciphertext, obtain
the device key tomorrow, and the closed sessions still do not open. That is
**forward secrecy**.

### A captured envelope cannot be replayed

- Each direction has its own counter, never repeating under one key.
- A device caches the last 4096 message IDs per session. A repeat is dropped,
  not run twice.
- A message older than **five minutes** has expired.
- A session closes after 15 minutes idle, or 60 minutes outright.
- One AEAD authentication failure **closes the session**; there is no retry.
- 1 GiB or 2^20 messages forces a fresh handshake.

Net effect: recording the wire does not let anyone replay it into a ghost
invoice.

### There is no "plaintext will do" mode

An unknown protocol version, or plaintext after the secure session is active,
is refused outright. There is no path down to a weaker mode.

## Limitations

Sync runs while the **app is open**. Button-level steps:
[Devices and sync](../admin/devices.md).

## Related pages

- [Devices and sync](../admin/devices.md)
- [Local-first](local-first.md)
- [Limits](limits.md)
