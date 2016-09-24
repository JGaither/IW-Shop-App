angular.module('starter.services-categories', [])

// ** todo: rename this service to services-settings

    .factory('Categories', function ($q) {
        /**
         * List of pre-defined categories (example only!)
         *
         * If you expect that the categories might change frequently over time,
         * then it is recommended to store them on the server-side (Firebase)
         * and retrieve the list from here.
         *
         */
        var self = this;
        var ref = firebase.database().ref();
        self.get = function () {
            var qCat = $q.defer();

            //
            ref.child('settings').child("categories").on("value", function (snapshot) {
                self.all = snapshot.val();
                qCat.resolve(snapshot.val());
            }, function (errorObject) {
                qCat.reject(errorObject);
            });
            return qCat.promise;
        };

        return self;
    })


    .factory('Settings_Fees', function ($q) {
        var self = this;
        var ref = firebase.database().ref();
        self.get = function () {
            var qCat = $q.defer();
            //
            ref.child('settings').child("fees").on("value", function (snapshot) {
                self.all = snapshot.val;
                qCat.resolve(snapshot.val);
            }, function (errorObject) {
                qCat.reject(errorObject);
            });
            return qCat.promise;
        };
        return self;
    });