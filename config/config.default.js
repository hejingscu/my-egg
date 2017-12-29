'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1508399848809_952';


  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
    defaultExtension: '.tpl',
  };
  
  // add your config here
  config.middleware = [];

  return config;
};
