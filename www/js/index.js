/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		//scanear();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
 
};



function scanear(){
    cordova.plugins.barcodeScanner.scan(
        //Si el scaneo del barcode Scanner funciona ejecuta la función result
        function (result) {  
            //Guardamos el resultado del código QR o código de barras en una variable
            var codigoQR=result.text;
			
			var cortar = codigoQR.split('</b>');
			var cortar = cortar[0].split('<b>');
			var nombrec=cortar[1]
			
			var cortar4 = nombrec.split(' ');
			var nombre = cortar4[0]
			var apellido = cortar4[1]
			
			var cortar2 = codigoQR.split("<a href='tel:");
			var cortar2 = cortar2[1].split("'>");
			var telefono=cortar2[0]
			
			var cortar3 = codigoQR.split("<a href='mailto:");
			var cortar3 = cortar3[1].split("'>");
			var email=cortar3[0]
			
            //Introducimos esa variable en el campo 
            $('#resultado').html(codigoQR);
			document.getElementById('en_correo').src = "http://marlonruo.com/wfc2015/phps/enviar_correo.php?nombre="+nombre+"&apellido="+apellido+"&telefono="+telefono+"&email="+email+"&correin="+correin
        }, 
        //Si no, pues ejecuta la función error.
        function (error) {
            notificacion("Ha ocurrido un error al escanear.");
        }
    );
};
