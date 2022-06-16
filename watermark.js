watermark(['/img/shepherd.jpg', '/img/logo.png'])
  .image(watermark.image.lowerRight())
  .then(function (img) {
    document.getElementById('composite-image').appendChild(img);
  });
