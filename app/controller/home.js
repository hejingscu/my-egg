'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      yield this.ctx.render('/home');
    }
  }
  return HomeController;
};
