process.env.UNI_USING_VUE3 = true;
process.env.UNI_USING_VUE3_OPTIONS_API = true;
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    module: {
      rules: [
        {
          // 先使用px2rpx把px转成rpx值，然后会根据不同屏幕比例进行换算成对应的px
          test: /\.scss$/,
          use: [
            {
              loader: 'px2rpx-loader',
              options: {
                baseDpr: 1,
                rpxUnit: 0.5,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
  },
};
