var App = function() {
    this.networkStatus = new SkyNetStatus();
    this.device = new Device();
    this.deviceList = new DeviceList('type', 'drone');
    this.deviceSearch = new DeviceSearch();
    this.deviceEvents = new DeviceEventList(this.uuid);
  };

window.app = new App();

$(function() {
    pager.extendWithPage(window.app);
    ko.applyBindings(window.app);
    pager.start();
});