# Desktop

macOS and Windows run the full front desk. A side rail — the same screens as
the phone.

## Overview

The PC has its own identity and syncs like a phone.

<div class="shot-wide-only" markdown>

<figure markdown>
![Home on a desktop](../images/en/light/home-wide.png){ loading=lazy }
<figcaption>Desktop (same layout as tablet)</figcaption>
</figure>

</div>

## Usage

A desktop can **start** pairing. On the new device, open **Settings →
Device identity** and keep it on this Wi-Fi. On the PC: **Settings → Add
another device** (or **Staff → Add staff → Invite staff**), tap the name
under **Nearby devices**, confirm the six-digit code on both screens,
then send. No camera.

The PC also **shows a QR** on Device identity, so a phone can still scan
this machine. **Scan the other device** / **Scan QR** are hidden on Mac
and Windows.

If **Nearby devices** stays empty, the network is blocking multicast.
Then a phone scans the QR. You cannot complete that fallback from the PC
alone. If this PC is the *only* device, create the store here.

Invite as **Manager**; promote to Owner only with a reason. Windows stores
keys per OS user.

**Printing.** A desktop prints straight to a thermal printer on the salon
network, the same as a phone does: **Settings → Thermal printer**. Bluetooth
printers are the exception — those pair from phones and tablets only. A printer
on USB goes through the system print dialog, which still works for every kind
of printer. See [Printing receipts](../guide/printing.md).

## Limitations

Two screens are withheld on purpose:

1. **Show recovery phrase** — it paints the secret on screen. The phrase
   lives on a **phone**.
2. **Move to a new device** (send) — needs a camera; a desktop identity is a
   replacement peer.

**Not** hidden: encrypted identity file (type a password), data backup.

If desktop is the only device: keep the archive **off** that PC. Restore =
clean install.

No phone-style home-screen widget. No pairing a Bluetooth printer.

## Related pages

- [Devices and sync](devices.md)
- [Backup and recovery](backup.md)
- [Downloads](downloads.md)
