console.log('iftekher mahmud pervez')

console.log($('.slick-slide'))

$(document).ready(function(){

})

$('.custom-slide').slick({
//     slidesToShow: 1,
//   slidesToScroll: 1,
  arrows: true,
  dots: false,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed:2000,
})

$('.partner-slide').slick({
        slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      infinite:true,
      autoplaySpeed: 1000,
    })