# ScrollingGallery
A little script that creates a simple javascript scrolling gallery that loops indefinitely.

#Usage
Add this snippet somewhere:

```
<script>
new ScrollingGallery({
  'selector': '.gallery',
  'speed': 2,
  'width': 150,
  'padding': 20,
  'hoverStop': true,
});
</script>
```

Which would turn this into a gallery:

```
<div class="gallery">
  <img src="img1.jpg" />
  <img src="img2.jpg" />
</div>
```

#Requirements:
Requires jQuery to be loaded on the page
