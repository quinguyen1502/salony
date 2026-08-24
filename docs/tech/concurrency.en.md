# Two devices, same edit

The first question anyone asks about local-first: two devices go offline, both
edit the same thing, then reconnect — which one loses? **Neither.**

## Overview

Salony does not run "last write wins". There is no cloud copy to arbitrate.
Two signed [events](../reference/terminology.md#event), each valid on its own
device, are both accepted.

What happens next depends on the edit. Where the app can compile a single
answer, it does. Where two devices took the same booking in different
directions, it keeps both, shows **Assignment conflict**, and asks you for the
final result.

``` mermaid
graph TD
  A[Device A offline: assigns Linh to the 10:00 booking] --> N[Back online]
  B[Device B offline: assigns Ha to that same booking] --> N
  N --> C[Both events accepted]
  C --> D[Every device compiles the same conflict state]
  D --> E[The booking shows Assignment conflict]
  E --> F[Resolve assignment: choose the final result]
  F --> G[A new event records the decision]
```

The resolve screen offers **Reassign staff**, **Choose another staff member**,
or **Leave unassigned**, and says why it is asking: "This booking was assigned
differently on multiple devices. Choose the final result." Once chosen, the
booking reads **Conflict resolved**.

Only **Owner** and **Manager** can do this. **Staff** cannot create or change
bookings.

## Technical detail

- [seq](../reference/terminology.md#seq) runs per *device, per store*. Device
  A never needs to know what device B has counted to, so two offline devices
  can never race for the same number.
- A missing number in the middle is **held pending**, never half-accepted.
  Receiving `seq = 5` while `seq = 3` was the last accepted holds 5 until 4
  arrives. Pending data does not reach any screen.
- Same device, same `seq`, different content → **rejected**. That is a forked
  or tampered log, not ordinary traffic.
- Re-sending an event that was already accepted is **harmless**: accepted once
  is accepted, and no invoice is duplicated.
- Conflict state is compiled from the event log itself, so every device
  reaches the same answer. No device is more right than another.
- Corrections are always **compensating events** — cancel, refund, reschedule.
  History is never deleted.

## Limits

**A double booking is refused at booking time only.** When you book, the app
checks on the device you are booking from: does that staff member already have
a booking covering this slot? If so it refuses, with "That staff member
already has a booking at this time."

Two offline devices each check only what they can see, and both pass. Once
they sync, **both bookings stand**. The app does not re-run the check after
sync and does not flag the overlap on its own. You will see two bookings in
the same slot on **Appointments**, and move or cancel one yourself.

Keeping both is deliberate: a signed, valid event is never thrown away. Not
pointing out the overlap afterwards is the part you have to catch.

## Related pages

- [Events and read models](events.md)
- [Sync](sync.md)
- [Appointments](../guide/appointments.md)
