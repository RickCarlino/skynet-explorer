var Device = function() {
        this.uuid = ko.observable('ad698900-2546-11e3-87fb-c560cb0ca47b');
    };

var SkyNetStatus = function() {
        var self = this;
        this.message = ko.observable('awaiting status');
        this.getStatus = function() {
            $.getJSON('/status', function(data) {
                self.message(data.skynet);
            });
        };
        this.getStatus();
    };

var DeviceSearch = function() {
        var self = this;
        this.key = ko.observable('type');
        this.val = ko.observable('drone');
        this.results = ko.observableArray();
        this.search = function() {
            self.results(['retrieving data...']);
            var url = '/devices?' + self.key() + '=' + self.val();
            $.getJSON(url, function(data) {
                if (data.errors) {
                  //just a quick hack for demonstration purposes-
                  // only display first error
                  self.results([data.errors[0].message]);
                } else{
                  self.results(data.devices);
                };
            });
        };
    };

var DeviceEventList = function() {
        this.attr = ko.observable('attr');
    };

var DeviceList = function(ky, vlue) {
        this.key = ko.observable(ky);
        this.val = ko.observable(vlue);
    };

var App = function() {
        this.networkStatus = new SkyNetStatus();
        this.device = new Device();
        this.deviceList = new DeviceList('type', 'drone');
        this.deviceSearch = new DeviceSearch();
        this.deviceEvents = new DeviceEventList(this.uuid);
    };

$(function() {
    window.app = new App();
    ko.applyBindings(window.app);
});