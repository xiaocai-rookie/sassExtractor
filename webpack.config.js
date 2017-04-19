var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
//var ROOT_PATH = path.resolve(__dirname);
//var APP_PATH = path.resolve(ROOT_PATH, 'app/main.js');
//var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: './app/main.js',
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  //添加我们的插件 会自动生成一个html文件
 /* plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ],//devserver的配置项*/
   /*devServer: {
    hot: true,
    inline: true
  },*/
  module: {
    loaders: [
      {test:/(\.css|\.scss)$/,loader:['style-loader','css-loader','sass-loader']},
      //提取css 将scss和css文件合并为一个文件 css
     // {test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract({fallback:'style-loader',use:['css-loader','sass-loader']})},
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
  /*    {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },*/
    ]
  },
  plugins:[//插件的书写位置
        new ExtractTextPlugin('./build/css/style.css')
  ]
};