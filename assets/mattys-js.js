var $productThumbnails = $('.slick-slide', '.product-images-carousel');
var $productGallery = $('.tt-mobile-product-slider');

$productThumbnails.click(function(e) {
  var clickedThumbnail = e.currentTarget;
  console.log(clickedThumbnail.dataset.slickIndex);
  console.log($productGallery.slick('slickGoTo', clickedThumbnail.dataset.slickIndex, true));
});