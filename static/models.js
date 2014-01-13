var Device = function() {
        self = this;
        this.uuid = ko.observable();
        this.token = ko.observable();
        this.properties = ko.observable({
            status: 'Select a device from the list'
        });
        this.events = ko.observableArray([{
            uuid: '1',
            socketid: '2',
            timestamp: '3',
            eventCode: '4',
            _id: '5'
        }]);
        this.authenticate = function() {
            self.token(prompt('Enter the device security token'));
            pager.navigate('device');
            self.fetchEvents();
        };
        this.fetchEvents = function() {
            var url = '/events/' + self.uuid() + '?token=' + self.token();
            ///events/{uuid}?token={token} 
$.getJSON(url, function(data) {
    if (data.errors) {
        return self.events([{
            uuid: 'error',
            socketid: 'error',
            timestamp: 'error',
            eventCode: 'error',
            id: 'error'
        }])
    } else {
        console.log('Fetched device events.')
        debugger;
        return self.events(data.events);
    };
});
        };
        this.fetchProperties = function() {
            self.properties({
                status: '...'
            })
            var url = '/devices/' + self.uuid()
            $.getJSON(url, function(data) {
                if (data.errors) {
                    return self.properties({
                        status: "Error retrieving data."
                    })
                } else {
                    return self.properties(data);
                };
            });
        };
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
                } else {
                    self.results(data.devices);
                };
            });
        };
    };

var DeviceList = function(ky, vlue) {
        this.key = ko.observable(ky);
        this.val = ko.observable(vlue);
    };