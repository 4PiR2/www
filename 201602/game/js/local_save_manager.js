window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalSaveManager() {
  this.key     = "savedscore";
  this.key2     = "savemap";
  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalSaveManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

LocalSaveManager.prototype.getMap = function () {
    return this.storage.getItem(this.key2)||"";
}
LocalSaveManager.prototype.setMap = function (mapStr) {
    return this.storage.setItem(this.key2,mapStr);
}
LocalSaveManager.prototype.getScore = function () {
  return this.storage.getItem(this.key) || 0;
};

LocalSaveManager.prototype.setScore = function (score) {
  this.storage.setItem(this.key, score);
};

