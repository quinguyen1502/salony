# Store settings

Store profile, hours, billing, commission, language, appearance, widget.

## Overview

**Settings** groups salon rows as **Store**, **Billing**, and **Staff**,
then **App** for this device. Some rows need Owner or Manager — the app
says **Requires owner or manager permission.** Rows show their current
value, such as the currency or tax rate, and the search box at the top finds
a setting by name.

<div class="shot-row" markdown>

<figure class="shot-phone" markdown>
![Settings on a phone](../images/en/light/settings.png){ loading=lazy }
<figcaption>Settings</figcaption>
</figure>

</div>

A **Staff** login on this device only sees: Appearance, Language, AI
assistant (if offered), Replay guided tour, Sync, Crash & usage reports.

## Configuration

**Store**

- **Store profile** — name, logo, brand colour, notes. Save is per-section.
- **Brand colour** — pick one of eight colours. Buttons, selected chips, the
  **Today** card and the tablet top bar take it, on every device of the
  store, staff devices too. The profile screen previews the colour at once;
  nothing is saved until **Save changes**. **Use default colour** goes back
  to Teal. Status colours, report charts and printed receipts stay as they
  are. An Owner or Manager can change it.
- **Operating hours** — when the salon is open each week.
- Currency: changing it only changes *display*, not numbers already frozen
  on old invoices.
- Time zone: changing it does **not** shift existing appointment times.
- **Online booking** — public page and request inbox. Owner turns it on.
  [Online booking](online-booking.md).

<div class="shot-row" markdown>

<figure class="shot-phone" markdown>
![Choosing a brand colour](../images/en/light/settings-brand-color.png){ loading=lazy }
<figcaption>Brand colour, previewing Rose</figcaption>
</figure>

</div>

**Billing**

- **Receipt** — what a printed receipt shows, for every device of the store.
  [Printing](../guide/printing.md) covers it.
- **Tax settings** — default rate. Tax is on the subtotal *after* discount;
  tips are not taxed.
- **Extra fees** — percent added by payment method. Off until you enable a
  row. A Card fee is already in the list.

**Staff**

- **Commission settings** — default %. Order: service beats staff, staff
  beats store default.
- **Staff bookings** — whether a Staff login sees only their bookings.
- **Turn rules** — suggesting who takes the next customer, and how turns
  are counted. See [Staff turns](../guide/turns.md).

**App** (this device)

- **Thermal printer** — which Bluetooth printer *this device* prints to.
  Unlike Receipt, it is not shared: each device has its own.
- **Language** and **Appearance** are on **this device** only.
- **AI assistant** — [its own page](../guide/ai-assistant.md).
- **Crash & usage reports** — anonymous, no salon data.

## Limitations

The home-screen widget is phone-only. A Staff device sees only *their*
bookings if the store sets **Staff bookings → Only own**.

## Related pages

- [Online booking](online-booking.md)
- [AI assistant](../guide/ai-assistant.md)
- [Services and commission](../guide/services.md)
- [Printing](../guide/printing.md)
- [Desktop](desktop.md)
