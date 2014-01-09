var Device = function () {
  self = this;
  self.uuid = ko.observable('ad698900-2546-11e3-87fb-c560cb0ca47b');
};

var SkyNetStatus = function () {
  self = this;
  self.message = ko.observable('online');
};

var DeviceEventList = function () {
  self = this;
  self.attr = ko.observable('attr');
};

var DeviceList = function (ky, vlue) {
  self = this;
  self.key = ko.observable(ky);
  self.val = ko.observable(vlue);
};

var App = function () {
  this.networkStatus = new SkyNetStatus();
  this.device = new Device();
  this.deviceList = new DeviceList('type', 'drone');
  this.deviceEvents = new DeviceEventList(self.uuid);
};

$(function(){
  ko.applyBindings(new App());
});