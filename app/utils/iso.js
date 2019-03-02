var hexToBinary = require('hex-to-binary');

exports.parseIso = function (iso){
	var mti = iso.substring(0,4);
	var bitmap = iso.substring(4,20);
	var bitmapBin = hexToBinary(bitmap);
	var data = iso.substring(20, iso.length);
	var jsonMsg = {
		"MTI": {
			"msg": mti,
			"version": mti.substring(0,1),
			"type": mti.substring(1,2),
			"function": mti.substring(2,3),
			"acquirer": mti.substring(3,4)
		},
		"Bitmap" : bitmap,
		"Binary" : bitmapBin,
		"Data" : data
	}
	return jsonMsg;
};

exports.validMti = function (iso){
	var jsonMsg = parseIso(iso);
	console.log(jsonMsg.mti);
	return false;
};

//module.exports = qiso;
module.exports = exports;