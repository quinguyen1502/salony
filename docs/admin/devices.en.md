# Devices and sync

Each device joins the store on its own. Adding a device is **not** logging
into the same account.

## Overview

Sync is **trusted devices** sending each other their changes over the salon
Wi-Fi. The salon is not uploaded to a cloud and downloaded again.

<div class="shot-row" markdown>

<figure class="shot-phone" markdown>
![Add device in Settings](../images/en/light/settings-identity.png){ loading=lazy }
<figcaption>Settings → Advanced → Add another device</figcaption>
</figure>

</div>

## Usage

### Pair two devices { #pair }

The same steps for every case: inviting staff, adding a second device of your
own, or bringing a new device into an existing store. Only the starting point
on the device already in the store differs:

| Task | On the device already in the store | Role of the new device |
| --- | --- | --- |
| Invite staff | **Staff → Add staff → Invite staff** (owner, manager) | You choose **Staff** or **Manager** |
| Add your own device | **Settings → Advanced → Add another device** (owner) | **Manager** by default |

Both devices side by side, on the salon Wi-Fi, at the same time:

1. **New device:** **Join a store** (the QR button on **Select store**), or the welcome screen
   right after installing. Keep that screen open.
2. **Device in the store:** open the starting point from the table.
3. Under **Nearby devices**, tap the other device's name. Both screens show
   a six-digit code. If it is the same, tap **Codes match** on both.
4. Fill in the name, pick a role if asked, then tap **Invite** (staff) or
   **Send invitation** (your own device).
5. **New device:** tap **Accept invitation**. Matching the code does not
   join the store; accepting does.

Nothing but the invitation passes between the two devices. To make the new
device an owner, change its role later in **Staff**.

### Reconnect a device that is already in the store { #reconnect }

After a restore or a change of device, the other devices pair again once.
Follow the same steps as above. If the other device is already in the store,
no new invitation is sent: both devices say *Reconnected* and sync as before.
That person keeps their role and history, so there is no need to remove them
and invite them again.

### The other device does not show up { #not-found }

**Nearby devices** stays empty when:

- the other device has not opened **Join a store**,
- the two are on different Wi-Fi networks,
- or the Wi-Fi keeps devices from seeing each other (common on guest and
  public Wi-Fi).

Then scan the QR code on the new device with a phone: **Scan QR** when
inviting staff, **Scan the other device** when adding your own. A Mac or PC
has no scan button, so always scan with a phone. Pasting a device ID alone
cannot send the invitation.

### Trusted devices

- **Offline** — the other app is closed or out of reach
- **Connected · Nearby** — the two devices see each other on the salon Wi-Fi

**Disconnect** only stops sync with that device. It does **not** take the
person out of the store. For that, use **Remove from store**: see
[Stop using a store](stop-using.md).

### Sync while the app is open

**Settings → Advanced → Sync**: devices sync on their own while the app is open on the
same Wi-Fi. A locked phone receives nothing, because there is no cloud inbox
to collect from.

This version does not sync over the internet: devices must share Wi-Fi. See
[Downloads](downloads.md).

### Notifications

**Settings → Advanced → Sync notifications**: a banner naming the *kind* of change that
synced, with no amounts. Only while the **app is open**.

## Related pages

- [Stop using a store](stop-using.md)
- [Protect and restore your salon](backup.md)
- [Desktop](desktop.md)
- [Sync internals](../tech/sync.md)
