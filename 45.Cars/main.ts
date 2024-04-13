//Define Fucntion create a Car Object.

function cars (manufacturer:string, model:string, ...options ){
    let car = {
        manufacturer : manufacturer, 
        model:model,
    };
    options.forEach(option=>{
        let [key, value] = option.split(":")
        car[key.trim()]=value.trim()
    })
    return car
}

let my_Car = cars("Toyota", "Corrolla","Color:Black","Sunroof:True","Year: 2022");
console.log(my_Car);


