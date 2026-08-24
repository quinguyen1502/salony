# How it works

The salon lives on your device, not in a cloud. This section explains the
mechanism — enough that you can check the claim yourself.

## Overview

Read the pages below in order and the story closes: where the data is, which
devices may read it, how sync travels, and what Salony **cannot** do.

Daily work is in the [User Guide](../guide/index.md). The buttons for turning
sync on are in [Devices and sync](../admin/devices.md).

## Read in order

<div class="grid cards" markdown>

-   :material-laptop:{ .lg .middle } **1. Local-first**

    ---

    The salon is on the device in your hand. The network is a side road.

    [:octicons-arrow-right-24: Local-first](local-first.md)

-   :material-key-variant:{ .lg .middle } **2. Identity**

    ---

    No login account. Each device holds its own keypair.

    [:octicons-arrow-right-24: Identity](identity.md)

-   :material-format-list-numbered:{ .lg .middle } **3. Events and read models**

    ---

    Every action is a signed, append-only event. Screens read the compiled
    model.

    [:octicons-arrow-right-24: Events and read models](events.md)

-   :material-call-split:{ .lg .middle } **4. Two devices, same edit**

    ---

    Two offline devices book the same slot. Neither one is overwritten.

    [:octicons-arrow-right-24: Two devices, same edit](concurrency.md)

-   :material-shield-lock:{ .lg .middle } **5. Sync**

    ---

    Noise handshake first, events after. The Relay forwards ciphertext only.

    [:octicons-arrow-right-24: Sync](sync.md)

-   :material-creation:{ .lg .middle } **6. AI on the device**

    ---

    Summaries and voice run locally. No salon data reaches an AI server.

    [:octicons-arrow-right-24: AI on the device](on-device-ai.md)

-   :material-alert:{ .lg .middle } **7. Limits**

    ---

    Where a server is still involved, and who can see what.

    [:octicons-arrow-right-24: Limits](limits.md)

</div>

## Related pages

- [Terminology](../reference/terminology.md)
- [Devices and sync](../admin/devices.md)
- [Backup and recovery](../admin/backup.md)
