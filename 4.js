/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. 
Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает. */

function Kitchenappliances (power){
    this.company = "Samsung"
    this.power = power
  }
  
  function Mixer (name, weight, power){
      this.name = name
      this.weight = weight
      this.power = power
  }
  
  function Toaster (name, weight,power) {
      this.name = name
      this.weight = weight
      this.power = power
  }
  
  
  function Kettle (name, weight, power) {
      this.name = name
      this.weight = weight
      this.power = power
  }
  
   Mixer.prototype = new Kitchenappliances();
   Toaster.prototype = new Kitchenappliances();
   Kettle.prototype = new Kitchenappliances();
  
  Kitchenappliances.prototype.getWeight = function() {
      console.log(`${this.name} Вес ${this.weight}г.`)
  }
  
  Kitchenappliances.prototype.isReady = function() {
          console.log(`${this.name} готов к использованию.`)
  }
  
  Kitchenappliances.prototype.turnerOn = function () {
      if(this.name == 'Миксер'){
          console.log(`${this.name} Включен, потреблямая мощность ${this.power}вт.`)
           powerMixer = this.power;
           return powerMixer;
      }else if(this.name == 'Тостер'){
          console.log(`${this.name} Включен, потреблямая мощность ${this.power}вт.`)
          powerToaster = this.power
          return powerToaster;
      }else{
          console.log(`${this.name} Включен, потреблямая мощность ${this.power}вт.`)
          powerKettle = this.power;
          return powerKettle;
      }
  }
  
  Kitchenappliances.prototype.turnerOff = function () {
          console.log(`${this.name} Выключен, потреблямая мощность 0вт.`)
  }
  
  function getSumm () {
      let result = powerKettle + powerMixer + powerToaster;
      console.log(`Потребляемая мощность всех включенных приборов ${result}вт.`)
  }
  
  let powerMixer = 0;
  let powerToaster = 0;
  let powerKettle = 0;
  
  
  
  const mixer = new Mixer ('Миксер', '2000', 1000);
  
  const toaster = new Toaster ('Тостер', '3000', 1200);
  
  const kettle = new Kettle ('Чайник','1000', 1100);
  
  mixer.model = 'ME83MR';
  toaster.size = '110 х 260sm.';
  kettle.volume = '2000ml.';
  
  
  toaster.getReady = function() {
      console.log(`${this.name} готов! Отключить его и включить ${kettle.name}?`);
  }
  
  mixer.mixing = function() {
      console.log(`${this.name} смешал ягоды. Достаньте их и положите в ${kettle.name}.`);
  }
  
  
  toaster.getWeight();
  kettle.isReady();
  mixer.turnerOn();
  toaster.turnerOn();
  kettle.turnerOff();
  getSumm();
  toaster.getReady();
  mixer.mixing();
  
  
  console.log(mixer)
  console.log(toaster)
  console.log(kettle)

