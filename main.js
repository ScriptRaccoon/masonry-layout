import { applyMasonryLayout } from "./masonry.js";

applyMasonryLayout({
    gridSelector: ".grid",
    itemSelector: ".item",
    contentSelector: ".content",
    rowHeight: 30,
    containsImages: true,
});
