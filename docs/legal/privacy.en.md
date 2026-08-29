<!-- Generated from assets/legal/ by handbook/tool/sync_legal.py. Do not edit. -->
# Privacy Policy

**Draft pending legal review. Not yet in force.**

Last updated: 28 August 2026

## In short

- Salony keeps your salon's records on the devices you own. Appointments,
  invoices, customers, staff, prices, commissions and settlements are written
  to your device and stay there.
- The developer never receives that data. There is no server holding your
  salon, and no copy of your books anywhere else. Signing in to use the
  developer's internet relay creates an account; running the salon does not
  require one.
- When your own devices sync with each other, they encrypt everything
  end-to-end. If you turn on sync over the internet, a relay server forwards
  sealed messages it cannot open.
- Crash and usage reports are anonymous, not linked to any account, and sent
  only after you say yes. You can say no, or change your mind later, and
  nothing further is sent.
- You can export everything on a device, and you can delete that device's
  copy by deleting the app. Deleting an account is separate: it removes the
  account record and stops licence renewal; it cannot delete salon data on
  your devices.

The rest of this document says the same thing in more detail, and names the
few cases where data does leave your device.

## Who this policy is from

Salony is built and published by one person rather than a company. This
policy calls them **the developer**. Questions about it go to
ntqui1502@gmail.com.

## Who is responsible for your salon's data

Your salon's own records — your customers' names and phone numbers, what they
booked, what they paid — are collected by you, held on your devices, and
controlled by you. Under data protection law you are the controller of that
data, and you decide what to collect and how long to keep it.

The developer is not a processor of that data either, because it never
reaches them. They cannot look up a customer, produce a report, or recover a
lost invoice for you. That is the direct consequence of the design, and it
cuts both ways: nobody else can reach your data, and nobody else can restore
it for you.

## What Salony stores on your device

- **The event log.** Every change you make is appended as a signed record:
  stores, staff, services and prices, commission rules, schedules, customers,
  appointments, invoices, corrections, settlements and payouts. Nothing is
  overwritten; corrections are added as new records.
- **Compiled views** built from that log so screens can load quickly.
- **Images you choose** — a store logo, staff and customer photos — copied
  into the app's own storage.
- **Your device identity.** An Ed25519 key pair. The private half is held in
  the operating system's secure store (Keychain on Apple platforms, Keystore
  on Android, DPAPI on Windows) and never leaves it.
- **Paired devices** you have trusted, and the keys needed to recognise them.
- **Your settings**: language, appearance, currency, printer choice, consent
  choices.
- **AI model files**, if you download the optional on-device assistant.

None of this is transmitted to the developer.

## What leaves your device, and when

### 1. Syncing with your own devices

Devices you have paired exchange the event log directly — over the same Wi-Fi
network, or over the internet if you turn that on. The connection is
end-to-end encrypted with the Noise protocol and is established only between
devices that have already been paired by QR code. A device that has not been
paired cannot join, and cannot read anything in transit.

### 2. The relay server (optional, off by default)

Sync over the internet is a switch you turn on per device. While it is on,
your devices connect to a relay server run by the developer so they can reach
each other from different networks.

The relay forwards sealed messages. It holds no key that can open them, so it
cannot read a single appointment, invoice or customer name. It does not store
your business data; undelivered messages are held for a few hours so a device
that was switched off can still collect them, and are then dropped.

To route a message the relay necessarily observes connection metadata: the
network address a device connects from, the times it connects and
disconnects, message sizes, and an opaque routing identifier. Where a
subscription is in force, the relay also sees the licence token presented at
connection. That token is deliberately built to name no salon, no store and
no person.

### 3. Crash and usage reports (optional, off until you agree)

Salony asks once, after onboarding, whether it may send anonymous diagnostics.
Nothing is sent before you answer, and Decline sends nothing at all. If you
agree, the following goes to [Sentry](https://sentry.io/privacy/), which
processes it on the developer's behalf:

- **Crash reports**: the stack trace, app version, device model, operating
  system version and free memory at the moment of a crash.
- **Breadcrumbs attached to a crash**: names only — which screen was opened,
  which sync phase was running, and whether a feature such as approving an
  invoice succeeded or failed. The invoice itself is never included.
- **Release health**: an anonymous app-start and app-exit ping carrying the
  app version and whether the session was crash-free, tied to a random
  per-installation identifier.

Salon business data, the event log, identity keys, backups and personal
details are never included. The app is built to strip these: automatically
collected breadcrumbs are dropped rather than filtered, screenshots and view
hierarchies are disabled, and no user profile or IP-based identity is
attached.

You can withdraw consent at any time under **Settings → Privacy**. Withdrawal
takes effect immediately: reports still waiting to be sent are discarded
rather than flushed.

### 4. Downloading the on-device AI model (optional)

If you enable the AI assistant, the app downloads a model file from its
publisher's servers. That is an ordinary file download — the host sees your
network address, as any download does, and nothing about your salon is sent.
Once downloaded, the assistant runs entirely on your device.

### 5. Account for internet sync (optional)

Running Salony on a device, pairing devices, syncing on the same network,
and using the on-device AI assistant do not require an account. An account
is needed only to use the relay server the developer operates, because that
server is the developer's infrastructure.

You create the account by signing in with Apple or Google. Salony does not
issue passwords. Signing in is the moment you agree to this processing, for
the purpose just stated.

The account record holds only:

- the sign-in provider (`google` or `apple`) and that provider's user
  identifier (`sub`), which together are the account's key
- the e-mail address the provider supplies, marked when it is an Apple
  private-relay (Hide My Email) address
- the time the account was created and the time it was last seen
- subscription state, and the opaque licence identifiers (`lic`) issued to
  the account

It does not hold a store identifier, a device or author key, any salon
records, or any identifier from the crash and usage reports in section 3.
Those reports stay anonymous: no account identifier or e-mail is sent with
them, and no diagnostic identifier is stored against an account.

The record is kept for as long as the account exists. To delete it, write
to ntqui1502@gmail.com. Deleting an account deletes the account record and
stops licence renewal. It does not, and cannot, delete a salon's data,
which lives on the salon's own devices.

Signing out on a device stops that device from renewing a licence. It does
not delete the account.

### 6. Nothing else

Salony contains no advertising, no advertising identifiers, and no
third-party analytics beyond the consented diagnostics above.

## Voice input

The voice bill entry feature listens only while you hold the button. Speech
is recognised on your device by software bundled with the app. The audio is
not recorded, not stored, and not sent anywhere.

## Device permissions

- **Camera** — to scan a pairing QR code. No image is stored or transmitted.
- **Photos** — only the pictures you pick for a logo or an avatar.
- **Local network** — to find and reach your other devices on the same Wi-Fi.
- **Bluetooth** — to send a receipt to a thermal printer in your salon.
- **Microphone** — voice bill entry, as described above.
- **Notifications** — to tell you when another device has synced changes.

Each is used for that purpose and no other.

## Backups made by your phone or computer

Salony's own export produces an encrypted archive that you place wherever you
choose (see below). Separately, your device's operating system may include app
data in its own device backup — iCloud, Google, or a computer backup — if you
have that enabled. Those backups are governed by Apple's or Google's terms
and your own settings, not by this policy. If you do not want your salon data
in a cloud backup, turn app backup off for Salony in your operating system's
settings.

## Retention, export and deletion

- **On your device**, data is kept until you delete it. The event log is
  append-only by design: a correction is a new record, so the history of a
  change remains readable.
- **Export**: Settings → Backup produces a `salony.backup.v1` archive
  encrypted with a passphrase you choose. The passphrase is never stored in
  the app and cannot be recovered. Reports can also be exported as CSV.
- **Deletion**: deleting the app removes its local data, including the event
  log and the keys held for it. There is no cloud copy of that salon data,
  so this is final for the copy on that device — export first if you may
  want the records later.
- **Account**: the account record is kept until you ask for it to be
  deleted. Write to ntqui1502@gmail.com. Deleting an account deletes the
  account record and stops licence renewal. It does not, and cannot,
  delete a salon's data, which lives on the salon's own devices.
- **Diagnostics** held by Sentry are retained for 90 days and then deleted.
  They contain no salon data.
- **Relay**: undelivered sealed messages are dropped after a few hours;
  nothing else is retained.

## Your rights

Because your salon's records never reach the developer, requests to access,
correct, export or erase them are answered by the app rather than by them:
everything is already on your device, exportable from Settings, and deletable
by removing the app.

For the account, write to ntqui1502@gmail.com to access, correct or delete
what is held. Deleting the account deletes the account record and stops
licence renewal; it does not delete salon data on your devices.

For the diagnostics you consented to, you may withdraw consent at any time in
Settings, which stops all further collection, and you may write to
ntqui1502@gmail.com to ask what is held under your installation identifier
and to have it deleted.

## Children

Salony is a tool for running a business and is not directed at children.

## Changes to this policy

If this policy changes materially, the updated version is published at the
address this document is served from, with a new "last updated" date, and the
in-app copy is updated in the next release.

## Contact

Salony — ntqui1502@gmail.com
