# Masonry layout

This is an implementation of a vertical Masonry layout as explained in the article [Masonry style layout with CSS Grid](https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb) by Andy Barefoot. It uses CSS grid and a bit of Vanilla JavaScript.

Demo: https://masonrylayout.netlify.app

## Usage

The HTML needs to have a grid container for the masonry items and each item needs to wrap around a content element.

```
<div class="grid">
    <div class="item">
        <div class="content">
          // ... content goes here
        </div>
    </div>
    // ... other items
</div>
```

See the sample HTML file `index.html` which has lots of dummy data.
 
The file `masonry.js` exports a function `applyMasonryLayout` with the following options:

- **gridSelector**: a CSS selector for the grid (for example: `.grid`)
- **itemSelector**: a CSS selector for the items (for example: `.item`)
- **contentSelector**: a CSS selector for the content elements as explained above (for example: `.content`)
- **rowHeight**: the height of the CSS grid rows (in pixels) which is used to calculate the heights. Accordingly, smaller heights give more precision. Defaults to `20`.
- **containsImages**: boolean which should be set to true if the items contain images. In that case, the tiny but useful package [imagesLoaded](https://imagesloaded.desandro.com/) needs to be installed. Defaults to `false`.

In the CSS the container needs to have the `display: grid` property, the rest is optional. For example, the following styles make sure that the items have a spacing of 20px, are at least 300px wide and fill up the whole horizontal space.

```
.grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
```

When you want to apply padding to the items, it is important to do this on the content wrappers, not the items themselves. Otherwise the height will not be calculcated correctly.

```
.content {
    padding: 20px;
}
```