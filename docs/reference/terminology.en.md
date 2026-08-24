# Terminology

Some technical names stay in English. Salon work uses the words in the app.

## Overview

Full explanation: [Local-first](../tech/local-first.md).

## Concepts

| Term | Meaning | Do not call it |
| --- | --- | --- |
| <a id="event"></a>**event** | A signed, [append-only](#append-only) record of **one** thing that happened in the salon. It is not edited in place. | A database row you update |
| <a id="envelope"></a>**envelope** | The wrapper a device puts around events for [sync](#sync). The [Relay](#relay) forwards those bytes and **cannot read** them. | A paper envelope, a letter |
| <a id="relay"></a>**Relay** | Salony’s store-and-forward server. It holds [ciphertext](#ciphertext) for a few hours. It is **not** where the salon lives. | A cloud database, a backup |
| <a id="read-model"></a>**read model** | A compiled summary of accepted events. Screens read this. | “The SQL table”, “the cloud copy” |
| <a id="append-only"></a>**append-only** | New events only. Correcting a bill is a **compensating** event. | Update/delete of a record |
| <a id="identity"></a>**identity** | Who this device is. Not a login account. | An account, a username |
| <a id="keypair"></a>**keypair** | Private key stays on the device; public key is what others see. | The app PIN, a password |
| <a id="ed25519"></a>**Ed25519** | The algorithm that signs events. | “Encrypting the invoice” |
| <a id="noise"></a>**Noise** | The secure handshake (XX pattern) before two devices exchange events. | The Wi-Fi password, TLS to the Relay |
| <a id="handshake"></a>**handshake** | The Noise step that authenticates both devices **before** any event is released. | A courtesy greeting |
| <a id="ciphertext"></a>**ciphertext** | Encrypted bytes. The Relay sees ciphertext, not customers / bookings / invoices. | A zip file, a PIN |
| <a id="seq"></a>**seq** | Per-identity, per-store sequence of events. | Invoice number, customer id |
| <a id="local-first"></a>**local-first** | The salon runs on your device. Accepted events are the [source of truth](#source-of-truth). | “An app skin on a cloud database” |
| <a id="source-of-truth"></a>**source of truth** | The accepted event log on the device. | “Salony’s server”, “the cloud account” |
| <a id="wake"></a>**wake** | A signal that can stir a device so the app can sync. It does **not** carry appointment content. | A server-sent “customer A at 14:00” banner |
| <a id="push"></a>**push** | The wake channel. Payload has no salon data. | SMS, invoice email |
| <a id="online-mode"></a>**online mode** | A **per-device** switch, scoped to a store. | “Turn on cloud for the whole salon” |
| <a id="licence-token"></a>**licence token** | The Relay subscription token for this install. | Recovery phrase, backup passphrase |
| <a id="backup"></a>**backup** | Identity phrase/file, or salon **data** file. See [Backup](../admin/backup.md). | “Salony keeps a copy for you” |
| <a id="sync"></a>**sync** | Exchanges accepted events between trusted devices. | “Save to Drive” |

## Salon operations — in the app’s language

| In the app | What it is |
| --- | --- |
| appointment / booking | Book, check in, complete, cancel, no-show |
| invoice / bill | Draft, approve, void, refund, print receipt |
| customer | A profile that belongs to **this store** |
| staff | A person with an identity, or a **virtual staff** profile |
| backup | You export a file / write 24 words |
| sync | Paired devices exchange events |
| offline | The salon still runs; sync waits for a path |

## Related pages

- [Local-first](../tech/local-first.md)
- [Roles](roles.md)
