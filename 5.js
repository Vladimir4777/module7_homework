// Переписать консольное приложение из 4 юнита на классы.

class Kitchenappliances {
    constructor(power) {
        this.company = 'Samsung';
        this.power = power;
    }
    getWeight() {
        console.log(`${this.name} Вес ${this.weight}г.`);
    }
    isReady() {
        console.log(`${this.name} готов к использованию.`)
    }
    turnerOn() {
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
    turnerOff() {
        console.log(`${this.name} Выключен, потреблямая мощность 0вт.`)
    }  
}
function getSumm () {
    let result = powerKettle + powerMixer + powerToaster;
    console.log(`Потребляемая мощность всех включенных приборов ${result}вт.`)
}
let powerMixer = 0;
let powerToaster = 0;
let powerKettle = 0;

class Mixer extends Kitchenappliances {
    constructor(name, weight, power){
        super(power);
        this.name = name;
        this.weight = weight;
        this.power = power;
    }
    mixing() {
        console.log(`${this.name} смешал ягоды. Достаньте их и положите в ${kettle.name}.`);
    }
}
class Toaster extends Kitchenappliances {
    constructor(name, weight,power){
        super(power);
        this.name = name;
        this.weight = weight;
        this.power = power;
    }
    isReady() {
        if(this.name){
            console.log(`${this.name} готов! Отключить его и включить ${kettle.name}?`);
        }else{
            super.isReady();
        }
    }
}
class Kettle extends Kitchenappliances {
    constructor(name, weight, power){
        super(power);
        this.name = name;
        this.weight = weight;
        this.power = power;
    }
}

const mixer = new Mixer ('Миксер', '2000', 1000);

const toaster = new Toaster ('Тостер', '3000', 1200);

const kettle = new Kettle ('Чайник','1000', 1100);

mixer.model = 'ME83MR';
toaster.size = '110 х 260sm.';
kettle.volume = '2000ml.';

toaster.getWeight();
kettle.isReady();
mixer.turnerOn();
toaster.turnerOn();
kettle.turnerOff();
getSumm();
kettle.isReady();
mixer.mixing();

console.log(mixer)
console.log(toaster)
console.log(kettle)