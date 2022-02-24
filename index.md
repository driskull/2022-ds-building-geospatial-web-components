<!-- .slide: data-background="img/2022/dev-summit/bg-1.png" data-background-size="cover" -->

<h1 style="text-align: left; font-size: 80px;">Building Geospatial Web Components</h1>
<p style="text-align: left; font-size: 30px; color: var(--r-section-subhead-color);">Dhrumil Shah, Ganesh Subbiah, Matt Driscoll</p>
<p style="text-align: left; font-size: 30px;">Slides: <a href="https://esriurl.com/ds2022-geo-web-components"><code>esriurl.com/ds2022-geo-web-components</code></a></p>

---

# Agenda

- Introduction
  - Calcite
- Web Components
  - Stencil.js
- Demo app
  - Build geospatial components
- Micro front ends
  - Map viewer
  - Charts
---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

## Calcite - Esri's design system

- Visual language for products
  - Design guidelines
    - Color, Spacing, Typography...
  - Graphic resources (Icons, symbols, Figma UI Kit)
  - Interactive documentation
    - Patterns & best practices
  - Reusable components
- Closes the gap between designers and UI engineers

---

## Calcite components

- Web Components for Calcite Design System
  - 50+ web components
    - Ready to use
    - Reusable
    - Provides a library of patterns
  - Internal & external use
    - [Developer subscription](https://developers.arcgis.com/pricing/build-arcgis-solutions/)
  - Easily build beautiful consistent apps

---

# Benefits

Why use Calcite components?

---

## Consistency <calcite-icon icon="thumbs-up"></calcite-icon>

- Consistent UX
  - Esri identity (look & feel)
  - Best practices
  - Conventions
- Clear direction for designers & developers

---

## Efficiency <calcite-icon icon="thumbs-up"></calcite-icon>

- Reduced effort & cost
  - Apps follow agreed upon designs workflows
  - Reduce cost of design updates
  - Reusable (Stop reinventing the wheel)
- Speed up development timelines

---

## Accessibility <calcite-icon icon="thumbs-up"></calcite-icon>

- Follows [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (W3 a11y guidelines)
  - Semantics
  - Keyboard access
  - Color contrast
  - Text alternatives
- Continuous Integration testing using [deque axe API](https://www.deque.com/)

---

## Standards-based <calcite-icon icon="thumbs-up"></calcite-icon>

- Web components
  - W3C specification (future-proof)
  - Encapsulation (Shadow DOM)
  - Familiarity (HTML)
  - Framework agnostic (Can be used in any framework)

---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

## Web Components (what?)

- Suite of different technologies (web standards)
- Allows you to create reusable custom elements
  - Functionality encapsulated
  - Utilize them in your web apps
- Supported by modern browsers

---

## Web Components (how?)

- Custom elements
  - Browser-compatible elements
  - Use native APIs
  - DOM element lifecycle
- Shadow DOM
  - Encapsulates component HTML & CSS
  - `<slot>` for distributing content

---

## Plug & Play

Use as native HTML elements

<div class="r-stack">

<div class="r-stretch">

```html
<label>
  Name (4 to 8 characters):
  <input
    minlength="4"
    maxlength="8"
    placeholder="John Doe"
    required />
</label>
```

  <label>
    Name (4 to 8 characters):
    <input
      minlength="4"
      maxlength="8"
      placeholder="John Doe"
      required
    />
  </label>
</div>

<!-- .element: class="fragment fade-out" data-fragment-index="0" -->

<div class="r-stretch">

```html
<calcite-label layout="inline">
  Name (4 to 8 characters):
  <calcite-input
    min-length="4"
    max-length="8"
    placeholder="John Doe"
    required
  ></calcite-input>
</calcite-label>
```

  <calcite-label layout="inline">
    Name (4 to 8 characters):
    <calcite-input
      min-length="4"
      max-length="8"
      placeholder="John Doe"
      required
    ></calcite-input>
  </calcite-label>
</div>

<!-- .element: class="fragment" data-fragment-index="0" -->
</div>

---

## Configuring components

- Slots
- Properties/Attributes

---

## Slots

Components provide slots to customize certain regions

```html
<calcite-tip heading="My Tip">
  Okay Guy is a sullen-looking rage comic character...
</calcite-tip>
```

<div style="display:flex; height: 200px; align-items: center; justify-content: center;">
  <calcite-tip heading="My Tip">
    Okay Guy is a sullen-looking rage comic character...
  </calcite-tip>
</div>

---

## Slots

Components provide slots to customize certain regions

```html
<calcite-tip heading="My Tip">
  <img
    slot="thumbnail"
    src="https://i.kym-cdn.com/photos/images/original/000/082/456/Okay.png"
    alt="This is an image of OK guy."
    height="100px"
  />
  Okay Guy is a sullen-looking rage comic character...
</calcite-tip>
```

<div style="display:flex; height: 350px; align-items: center; justify-content: center;">
  <calcite-tip heading="My Tip">
    <img
      slot="thumbnail"
      src="https://i.kym-cdn.com/photos/images/original/000/082/456/Okay.png"
      alt="This is an image of OK guy."
      height="200px"
    />
    Okay Guy is a sullen-looking rage comic character...
  </calcite-tip>
</div>


---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Stencil.js

- todo

---
<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

# Questions? 🤔


---

<!-- .slide: data-background="img/2022/dev-summit/bg-7.png" data-background-size="cover" -->

Please provide your feedback for this session by clicking on the session survey link directly below the video.
<!-- .element: style="margin: 0 20%;" -->

---

<!-- .slide: data-background="img/2022/dev-summit/bg-8.png" data-background-size="cover" -->

---

<h1 style="text-align: left; font-size: 48px;">Section Header</h1>
<p style="text-align: left; font-size: 24px; color: var(--r-section-subhead-color);">Section Subhead</p>

---

<h2 data-id="code-title">Code Example</h2>
<pre data-id="code-animation"><code class="hljs" data-trim data-line-numbers>
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  return (
    ...
  );
}
</code></pre>


