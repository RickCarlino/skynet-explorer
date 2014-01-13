var App = function() {
    this.networkStatus = new SkyNetStatus();
    this.device = new Device();
    this.deviceList = new DeviceList('type', 'drone');
    this.deviceSearch = new DeviceSearch();
  };

window.app = new App();

$(function() {
    pager.extendWithPage(window.app);
    ko.applyBindings(window.app);
    pager.start();
});

window.app.respCodes = []
window.app.respCodes[100] = "Web socket connected";
window.app.respCodes[101] = "Web socket identification";
window.app.respCodes[200] = "System status API call";
window.app.respCodes[201] = "Get events";
window.app.respCodes[202] = "Don't know";
window.app.respCodes[203] = "Don't know";
window.app.respCodes[300] = "Incoming message";
window.app.respCodes[400] = "Register device";
window.app.respCodes[401] = "Update device";
window.app.respCodes[402] = "Delete device";
window.app.respCodes[403] = "Query devices";
window.app.respCodes[500] = "WhoAmI";