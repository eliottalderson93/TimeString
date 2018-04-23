function TimeString(){
    var Hour =8;
    var Minute = 50;
    var Morning = true;
    var manana;
    var nanana;
    if (Morning === true){
        manana = 'in the morning.';
    }
    else{
        manana = 'in the evening.';
    }
    if(Minute<30){
        nanana = 'just after ';
    }
    else{
        nanana = 'just before';
        Hour++;
    }
    console.log("It's",nanana, Hour, manana);
}
TimeString();