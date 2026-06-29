/* eslint-disable */
Promise.prototype.finally ||
  (Promise.prototype.finally = function (t) {
    if ("function" != typeof t) return this.then(t, t);
    var n = this.constructor || Promise;
    return this.then(
      function (r) {
        return n.resolve(t()).then(function () {
          return r;
        });
      },
      function (r) {
        return n.resolve(t()).then(function () {
          throw r;
        });
      },
    );
  });
