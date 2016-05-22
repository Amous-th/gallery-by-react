require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片信息转成图片URL路径信息
imageDatas = (function getImageURL(imageDataArr) {
  for(var i = 0,j=imageDataArr.length;i<j;i++){
    var singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('../images'+singleImageData.fileName)
    imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
})(imageDatas);

class GalleryByReactApp extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          <nav className="controller-nav">

          </nav>
        </section>
      </section>
    );
  }
}

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
