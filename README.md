# Enumeration Sort Selector

Pluggable web widget for Mendix 10.24.x. It binds to one editable enumeration attribute and renders a select control.

## Features
- Sort by technical enumeration key or localized caption.
- Caption sorting uses `enumerationAttribute.formatter.format(key)`, so Mendix resolves the caption for the current signed-in user's language.
- Ascending or descending sorting.
- Supports read-only state, validation feedback, empty value, accessibility label and offline-capable apps.

## Build
1. Install Node.js 18 or newer.
2. Run `npm install`.
3. Run `npm run release`.
4. The MPK is written to `dist/1.0.0/`.

## Install in Studio Pro
Copy `EnumerationSortSelector.mpk` into the app's `widgets` directory and press F4 in Studio Pro.

## Configure
Place the widget inside a data view, select an enumeration attribute and choose **Key** or **Caption (current user language)**.
