<!-- Generated from assets/legal/ by handbook/tool/sync_legal.py. Do not edit. -->
# Privacy Policy

**Draft pending legal review. Not yet in force.**

Last updated: 5 October 2026

## In short

- Salony keeps your salon's records on the devices you own. Appointments,
  invoices, customers, staff, prices, commissions and settlements are written
  to your device and stay there. That is the books. Salony keeps no cloud
  copy of the books; an encrypted backup goes only where you put it.
- The developer never receives the books. The internet relay cannot read
  them: it forwards sealed messages it cannot open. Signing in creates an
  account; running the salon does not require one. The same account is
  needed if you turn on a public page.
- A public page is optional and off until an owner turns it on. If you do,
  a **booking service** — separate from the relay — hosts only the brochure
  you chose to publish and booking *requests* from people who are not Salony
  users. Name, phone, email and note on a request are kept only for a short
  time. That is not a copy of the books, and it is not the relay.
- When your own devices sync with each other, they encrypt everything
  end-to-end. If you turn on sync over the internet, the relay forwards
  sealed messages it cannot open. It still does not hold salon books,
  snapshots, or booking requests.
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

The developer is not a processor of the books on your devices, because those
records do not reach them. They cannot look up a customer in your salon,
produce a report from the books, or recover a lost invoice for you. That is
the direct consequence of the design, and it cuts both ways: nobody else can
reach the books, and nobody else can restore them for you.

If you turn on a public page, you still decide what is published and you
still collect booking requests from people who contact your salon. You remain
the controller of that hosted data. The developer then operates the booking
service that holds the brochure and the pending requests, and is a processor
of that hosted data only, and only while the feature is on. Turning the page
off stops new requests; it does not delete the books on your devices.

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

The books on the device are not transmitted to the developer. If you enable a
public page, the device sends only the brochure fields and images you chose
to publish, and later collects booking requests, as described in section 6.

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

The relay does not host public pages, store snapshots, logos, service
catalogues, booking requests, or customer name, phone or email from a
booking form. Those belong on the booking service in section 6, if you turn
that on, and never on the relay.

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

You can withdraw consent at any time under **Settings → Advanced → Privacy**. Withdrawal
takes effect immediately: reports still waiting to be sent are discarded
rather than flushed.

### 4. Downloading the on-device AI model (optional)

If you enable the AI assistant, the app downloads a model file from its
publisher's servers. That is an ordinary file download — the host sees your
network address, as any download does, and nothing about your salon is sent.
Once downloaded, the assistant runs entirely on your device.

### 5. Account (optional)

Running Salony on a device, pairing devices, syncing on the same network,
and using the on-device AI assistant do not require an account. An account
is needed to use the relay the developer operates, and to turn on a public
page on the booking service, because both are the developer's infrastructure.
People who open a public page or send a booking request do not get a Salony
account.

You create the account by signing in with Apple or Google. Salony does not
issue passwords. Signing in is the moment you agree to this processing, for
the purposes just stated. Signing in does not publish a page; an owner still
has to turn that on.

The account record holds only:

- the sign-in provider (`google` or `apple`) and that provider's user
  identifier (`sub`), which together are the account's key
- the e-mail address the provider supplies, marked when it is an Apple
  private-relay (Hide My Email) address
- the time the account was created and the time it was last seen
- subscription state, and the opaque licence identifiers (`lic`) issued to
  the account
- an opaque account identifier used to bind a public page on the booking
  service, if you enable one. It is not your salon's internal store id.

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

### 6. Public page and online booking (optional, off until you turn it on)

This is a separate service from the relay. It does not share the relay's
store, and the relay still cannot identify a salon.

An owner who is signed in may turn on a public page for a store. Until that
happens, the booking service holds nothing about that store. Managers may
update what is published; staff cannot turn the page on or review requests.

**Brochure.** While the page is on, the booking service hosts a public
snapshot the device sends: store name; optional public description (not your
internal notes); optional logo; optional address and phone; time zone and
currency; operating hours; and the services you marked public (name,
optional description, duration, price, optional image, optional category).
It also stores a public store identifier, the link name (slug), and a
version so an older publish cannot overwrite a newer one. It does not
receive internal staff records, customer lists, appointments, invoices,
schedules, internal notes, tax id, or the event log.

Anyone with the link can read that brochure. That is the point of a public
page.

**Staff on the page.** The salon may publish a staff display name and an
optional photo on the public page. That is a public name the salon chose,
not the internal staff record and not a login. Anyone with the link can see
it. It is removed from the public page when the salon stops publishing it.

**Booking requests.** If you also accept new requests, a visitor can send
one or more of the services the salon marked public, up to the cap the salon
set (1 to 12; if they set none, 12). They also send a preferred date and
time (a preference, not a reserved slot), their name and phone, and
optionally an email and a note. Email on a request is optional. A visitor
does not get a Salony account.

The booking service is not the relay and is not the salon's appointment
book. A request is not an appointment. It becomes an appointment only after
someone with permission confirms it on a store device. The booking service
does not keep a customer database.

**How long a request is kept.** **7 days** after a store device has saved
the request and acknowledged it, the booking service deletes the visitor's
name, phone, email, and note. It keeps the request id, the store, the
services (name, duration, and price as they were at submit), the preferred
date and time, the outcome, the prices that were shown, and the review, so
the status page and the review still open. A request that has not been
collected is still kept at least **30 days**.

**Status page.** A status page for one request link shows the store name
and its published address and phone, the services and the prices shown on
the form, the preferred date and time, the preferred staff member if one was
chosen, and whether the request was received, confirmed, rejected, or the
visit completed. It does not show the visitor's name, phone, email, or note.
Received means the salon will review the request. It does not mean a time is
booked.

**Messages about a request.** If the visitor left an email, the booking
service may send a message when the request arrives, one when the salon
confirms or rejects it, and, after the visit is marked completed, one
reminder with a review link. The confirmation already carries that review
link. The language is the one chosen on the form (English, Vietnamese, or
Chinese). A message shows the store name and address, the services, and the
preferred date and time, with a link to the status page. Messages go through
the email delivery provider the operator configures; it receives the address
and the message, not the visitor's name, phone, or note. If that email was already deleted, the
reminder is not sent. The review page still works for someone who has the
link.

**A notice to the salon.** A signed-in store device may register a push
token with the booking service so it can be told that a request arrived.
This is not the relay. The notice is delivered through Google Firebase
Cloud Messaging. The notification title is Salony. The body does not
contain the visitor's name, phone, email, the service, the time, the note,
or review text. The token is deleted when the store's public binding is
deleted. It is not used for advertising and it is not written into
operational logs.

**Reviews.** After a completed visit, the visitor can leave one review: a
rating from 1 to 5 and optional text of at most 400 characters. The public
page shows the average and the reviews the salon has not hidden, without
the visitor's name. Hiding a review removes it from the public page and the
public average. The booking service keeps the row. A second submit does not
change the stored review. A request that is not completed cannot be
reviewed.

**What the booking service also sees.** To serve the page and to limit
abuse, it sees the network address a visitor connects from, as any website
does. It does not use that for advertising. Operational logs are not written
with the visitor's name, phone, email, note, review text, or a push token.

**Limits that protect people.** So that a page cannot be used to flood a
salon, or to send email to someone who did not ask for it, the booking
service counts for a short time how many requests one phone number sends to
one store, and how many messages go to one email address. It does not keep
the number or the address for this. It keeps a one-way code made from it
with a secret key, which cannot be turned back into the number or the
address, and the code for a phone is different at every store. Each count
is deleted at most one day after its period (a day) ends. When a limit is
reached, the new request is not taken, or the message is not sent. A
request the service has already accepted is never removed because of a
limit.

**Turning it off.** You can leave the brochure up while refusing new
requests, or hide the page. Hiding the page is not a delete of the books on
your devices. Deleting the app on a device does not by itself wipe the
public page; turn the page off from a signed-in owner device.

### 7. Nothing else

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
- **Notifications** — to tell you when another device has synced changes,
  or when the booking service tells a signed-in store device that a request
  arrived.

Each is used for that purpose and no other.

## Backups made by your phone or computer

Salony's own backups are encrypted files that go only where you choose (see
below). Separately, your device's operating system may include app
data in its own device backup — iCloud, Google, or a computer backup — if you
have that enabled. Those backups are governed by Apple's or Google's terms
and your own settings, not by this policy. If you do not want your salon data
in a cloud backup, turn app backup off for Salony in your operating system's
settings.

## Retention, export and deletion

- **On your device**, data is kept until you delete it. The event log is
  append-only by design: a correction is a new record, so the history of a
  change remains readable.
- **Backups**: Settings → Protect your salon saves an encrypted backup of
  the salon's data, and Salony checks each one. A backup you save yourself
  goes where you pick, and opens with your recovery key or with a backup
  password you choose. The password is never stored in the app and cannot
  be recovered.
- **Automatic backup**, if you turn it on, writes a new backup about once a
  day, when you open or leave the app, only into the folder you chose. It opens only with your recovery key.
  In that folder Salony keeps the backups that device made in the last 7
  days, 4 weeks and 3 months, and deletes its own older ones. It never
  deletes a file it did not make. To find the folder again, Salony keeps
  its name and the permission to open it on that device only.
- **Where backups end up**: if the folder you chose syncs to a cloud
  service such as iCloud Drive, OneDrive, Dropbox or Google Drive, that
  service stores the files under its own terms and your settings. Salony
  and the developer never receive your backups, your recovery key or your
  backup password, and keep no copy of them.
- **Reports** can also be exported as CSV.
- **Deletion**: deleting the app removes its local data, including the event
  log and the keys held for it. Salony keeps no cloud copy of the books, so
  this is final for the copy on that device — back up first if you may want
  the records later. A public page you left on is separate (section 6).
- **Account**: the account record is kept until you ask for it to be
  deleted. Write to ntqui1502@gmail.com. Deleting an account deletes the
  account record and stops licence renewal. It does not, and cannot,
  delete a salon's data, which lives on the salon's own devices.
- **Diagnostics** held by Sentry are retained for 90 days and then deleted.
  They contain no salon data.
- **Relay**: undelivered sealed messages are dropped after a few hours;
  nothing else is retained. The relay does not retain snapshots or booking
  requests.
- **Booking service**: the public brochure is held while you have a public
  page. A request that has not been collected is still kept at least 30
  days. 7 days after a store device has saved the request and acknowledged
  it, the booking service deletes the visitor's name, phone, email, and
  note. It keeps the request id, the store, the services, the preferred
  date and time, the outcome, the prices that were shown, and the review,
  so the status page and the review still open. A push token is deleted
  when the store's public binding is deleted.

## Your rights

Because the books never reach the developer, requests to access, correct,
export or erase them are answered by the app rather than by them:
everything is already on your device, exportable from Settings, and deletable
by removing the app.

If you turned on a public page, you can change or unpublish the brochure
from the app. A person who sent a booking request is asking your salon, not
opening a Salony account: they should contact you. You can confirm or reject
the request on a store device. To ask what the booking service still holds
for a request that has not yet been deleted, write to ntqui1502@gmail.com.

For the account, write to ntqui1502@gmail.com to access, correct or delete
what is held. Deleting the account deletes the account record and stops
licence renewal; it does not delete salon data on your devices.

For the diagnostics you consented to, you may withdraw consent at any time in
Settings, which stops all further collection, and you may write to
ntqui1502@gmail.com to ask what is held under your installation identifier
and to have it deleted.

## Children

Salony is a tool for running a business and is not directed at children. The
public page is a salon brochure, not a service for children.

## Changes to this policy

If this policy changes materially, the updated version is published at the
address this document is served from, with a new "last updated" date, and the
in-app copy is updated in the next release.

## Contact

Salony — ntqui1502@gmail.com
