var ScrollingGallery = function(settings) {
	// Default settings values
	if (!settings) throw "ScrollingGallery error: No settings applied";
  
	this.selector = settings.selector || null;
  if (!this.selector) throw "ScrollingGallery error: Selector not set";
  
  this.speed = settings.speed || 1;
  this.width = settings.width || 250;
  this.padding = settings.padding || 0;
  
 	this.hoverStop = settings.hoverStop || false;
  this.hovering = false;
  
  if (this.hoverStop) {
    $(this.selector).hover(function(){
      gallery.hovering = true;
    }, function(){
      gallery.hovering = false;
    });  
  }

  // Private vars
  var gallery = this;
  
  this.images = [];
  this.lastSwapped = 0;
  
  $(this.selector).css('position', 'relative').css('overflow', 'hidden');
  
  $(this.selector).find('img').each(function(){
  	$(this).css('width', gallery.width).css('height', $(gallery.selector).height()).css('position', 'absolute');
		gallery.images.push(this);
  });
  
  this.lastSwapped = this.images.length - 1;
  
  for (var i = 0; i < gallery.images.length; i++) {
    $(gallery.images[i]).css('left', i * gallery.width + i * gallery.padding);
  }
  
  function Scroll() {
    requestAnimationFrame(Scroll);
		
    if (gallery.hoverStop && gallery.hovering) return;
    
    for (var i = 0; i < gallery.images.length; i++) {
    	var current = LeftValue(i);
      
      $(gallery.images[i]).css('left', current - gallery.speed);
      
      if (current + gallery.width + gallery.padding <= 0) {
        $(gallery.images[i]).css('left', LeftValue(gallery.lastSwapped) + gallery.width + gallery.padding - gallery.speed);
        gallery.lastSwapped = i;
      }
  	}
  }

	function LeftValue(i) {
  	return parseInt($(gallery.images[i]).css('left'), 10);
  }
  
  Scroll();
}
