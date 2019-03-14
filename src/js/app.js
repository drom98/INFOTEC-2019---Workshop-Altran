// Your code goes here

function showSpeed(data) {
  console.log(data);
  var speed = data.average_speed;
  if(speed !== undefined) {
    var speedText = document.querySelector("#speed");
    speedText.textContent = speed;
  }
}

function showUnit(data) {
  console.log(data);
  var unit = data.Display_units;
  var unitText = document.querySelector("#units");
  if(unit == 0) {
    unitText.textContent = "Km/h";
  } 
  else if(unit == 1) {
    unitText.textContent = "miles/h";
  }
}

gm.info.watchVehicleData(showUnit, ['Display_units']);

gm.info.watchVehicleData(showSpeed, ['average_speed']);

var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
});
