# FAQ

Short answers. Detail lives on the linked page.

??? question "Do I need a login account?"

    No. Identity is a keypair on the device. See
    [Identity](../tech/identity.md).

??? question "Can Staff create appointments?"

    No. Only Owner and Manager. Staff draft invoices, set availability, and
    see their own earnings. See [Roles](roles.md).

??? question "What if the network is down?"

    Bookings, bills, and reports still run. Sync waits until the app is open
    and a path exists. See [Local-first](../tech/local-first.md).

??? question "Does Salony keep a copy of my salon?"

    No. You [back up](../admin/backup.md) the 24 words and the data file
    yourself.

??? question "Is adding a device the same as logging into one account?"

    No. Each device has its own identity. Pair with QR.
    See [Devices and sync](../admin/devices.md).

??? question "Is there Bluetooth thermal printing?"

    Not in this build. Receipts print through PDF / the OS dialog.

??? question "Where does the AI assistant send data?"

    It does not send salon data to a cloud. The internet is used only to
    download a model. See [AI assistant](../guide/ai-assistant.md).

## Related pages

- [Getting started](../start/index.md)
- [Terminology](terminology.md)
- [Limits](../tech/limits.md)
