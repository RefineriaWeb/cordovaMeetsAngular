/**
 * @description: Checks if device has internet connection
 * Dependencie: cordova network information
 * install: cordova plugin add org.apache.cordova.network-information
 */

angular.module('cordovaMeetsAngular.plugins.network',[])
    .factory('$cordovaNetwork', [function() {

        return {

            getConnection: function () {
                // Get connection type
                try{
                    if(navigator.connection) {
                        return navigator.connection.type;
                    }else{
                        throw 'No navigator.connection available in this browser';
                    }

                }catch( e ){
                    console.log(e);
                }
            },

            isOnline: function ( ) {
                // Check if Connection is on
                try{
                    if(navigator.connection){
                        var netWorkState = navigator.connection.type;
                        return netWorkState !== Connection.UNKNOWN && netWorkState !== Connection.NONE;

                    }else{
                        throw 'No navigator.connection available in this browser';
                    }
                }catch (e) {
                    console.alert(e);
                }
            },

            isOffline: function ( ) {
                // Check if Connection is off

                try{
                    if(navigator.connection){
                        var netWorkState = navigator.connection.type;
                        return netWorkState !== Connection.UNKNOWN || netWorkState !== Connection.NONE;

                    }else{
                        throw 'No navigator.connection available in this browser';
                    }

                }catch (e) {
                    console.alert(e);
                }

            }


        };


    }]);
