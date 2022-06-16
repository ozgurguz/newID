watermark(['/img/11.jpg', '/img/1120x630_Logo_AA.png'])
  .image(watermark.image.lowerRight())
  .then(function (img) {
    document.getElementById('composite-image').appendChild(img);
  });
