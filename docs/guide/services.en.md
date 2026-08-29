# Services and commission

Create a service, categories, price, commission %. **Owner** and **Manager**
have full catalog access.

## Overview

Owner / Manager create, edit, change price, deactivate/restore, manage
categories, and import CSV. Staff use the list when drafting bills — they
do not edit the catalog.

<div class="shot-row" markdown>

<figure class="shot-phone" markdown>
![Services on a phone](../images/en/light/services.png){ loading=lazy }
<figcaption>Phone</figcaption>
</figure>

<figure class="shot-wide" markdown>
![Services on a tablet](../images/en/light/services-wide.png){ loading=lazy }
<figcaption>List and detail on tablet</figcaption>
</figure>

</div>

## Usage

### Create a service

1. Open **Services**.
2. Tap **+** / **Add service**.
3. **Service name** is required.
4. **Category** is optional — **Uncategorized**, or an existing category.
5. **Duration minutes** and **Price** are required.
6. **Commission settings** if this service differs from the default.
7. Optional photo. **Create service**.

<div class="shot-row" markdown>

<figure class="shot-phone" markdown>
![New service form](../images/en/light/services-form.png){ loading=lazy }
<figcaption>Phone</figcaption>
</figure>

<figure class="shot-wide" markdown>
![Service form on a tablet](../images/en/light/services-form-wide.png){ loading=lazy }
<figcaption>Tablet and desktop</figcaption>
</figure>

</div>

Changing a price does **not** rewrite approved invoices. An invoice keeps the
snapshot from approval.

### Categories

On the form, open **Category** → **Manage categories**. Add groups (Hair,
Nails) so booking / bill forms stay short.

<div class="shot-phones" markdown>

<figure markdown>
![Choose category](../images/en/light/services-category-picker.png){ loading=lazy }
<figcaption>Choose category</figcaption>
</figure>

<figure markdown>
![Manage categories](../images/en/light/services-categories.png){ loading=lazy }
<figcaption>Manage categories: each row carries its service count</figcaption>
</figure>

</div>

Archiving a category does not delete invoice history that used that service.

### Detail and commission

Tap a service for duration, price, performance. **Commission settings** on
the detail (or on the create form):

<div class="shot-phones" markdown>

<figure markdown>
![Service detail](../images/en/light/services-detail.png){ loading=lazy }
<figcaption>Service detail</figcaption>
</figure>

<figure markdown>
![Service commission](../images/en/light/services-commission.png){ loading=lazy }
<figcaption>Per-service commission</figcaption>
</figure>

</div>

## Concepts

Order, also shown in **Settings → Commission settings**:

1. % on the **service** if set (override)
2. else % on the **staff member**
3. else the store **default commission rate**

On approve, the commission amount **freezes into the snapshot**. Changing the
rate later does not redo old bills.

## Related pages

- [Store settings](../admin/store-settings.md)
- [Invoices and receipts](invoices.md)
- [Earnings](earnings.md)
