# Devices and sync

Each machine has its own identity. Adding a device is **not** logging into
the same account.

## Overview

Sync exchanges accepted [events](../reference/terminology.md#event) between
trusted devices — it does not upload the salon to a cloud.

<div class="shot-row" markdown>

<figure class="shot-phone" markdown>
![Add device in Settings](../images/en/light/settings-identity.png){ loading=lazy }
<figcaption>Settings → Add another device / Device identity</figcaption>
</figure>

</div>

## Usage

### Add another device

Two devices, on the salon Wi-Fi, at the same time. On a device that is
already Owner:

1. New device: **Settings → Device identity**. Keep that screen open.
2. Owner: **Settings → Add another device**.
3. Under **Nearby devices**, tap the name. Both screens show a six-digit
   code. If it is the same, tap **Codes match** on both.
4. Name the device, then **Send invitation**. Default role **Manager**.
5. New device: **Accept invitation**. Matching the code does not join the
   store; Accept does.

If **Nearby devices** is empty: open Device identity on the other
machine, join this Wi-Fi, or **Scan the other device**. A Mac or PC has
no scanner. When the network blocks multicast the list stays empty; scan
the QR from a phone.

Keys are not copied. Promote to Owner later in **Staff** if needed.

### Trusted devices

- **Offline** — the other app is closed / unreachable
- **Connected · Nearby** — LAN / nearby

**Disconnect** stops sync; it does **not** remove the person from Staff.

### Sync while the app is open

**Settings → Sync**: auto-sync when the app is open on the same Wi-Fi (or QR
if the network blocks multicast). A locked phone does not receive a cloud
inbox.

### 1.1.0 does not sync over the internet

There is no **Settings → Sync over the internet** control. Devices must
share Wi-Fi. Pair from **Nearby devices**, or scan QR when the list is
empty. That control returns when a
[Relay](../reference/terminology.md#relay) is hosted — see
[Sync](../tech/sync.md).

### Notifications

**Settings → Sync notifications**: a banner of the *kind* of change — no
amounts. Only while the **app is open**.

## Related pages

- [Sync internals](../tech/sync.md)
- [Backup and recovery](backup.md)
- [Desktop](desktop.md)
