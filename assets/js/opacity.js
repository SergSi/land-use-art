function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
   
    switch(m) {
    case 1:
    case 2:
    case 3:
    case 4:
        text_m = "начало";
        break;
    case 5:
    case 6: 
    case 7:
    case 8:
    case 9:
    case 10:
        text_m = "первая четверть";
        break;
    case 11:
    case 12:
    case 13:   
    case 14:
        text_m = "почти четверть";
        break;
    case 15:
    case 16:
        text_m = "четверть";
        break;
    case 17:
    case 18:
        text_m = "начало второй четверти";
        break;
    case 19:       
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:  
    case 26:
        text_m = "вторая четверть";
        break;
    case 27:
    case 28:
    case 29:
        text_m = "почти половина";
        break;
    case 30:
    case 31:   
        text_m = "половина";
        break;
    case 32:
    case 33:
        text_m = "начало второй половины";
        break;
    case 34:
    case 35:
    case 36:
    case 37:  
    case 38:
    case 39:
    case 40:
        text_m = "вторая половина";
        break;} 

  if ((m < 41 )) {
    switch(h) {
    case 0:
        text_h = "первого часа ночи";
        break;    
    case 1:
        text_h = "второго часа ночи";
        break;
    case 2:
        text_h = "третьего часа утра";
        break;
    case 3:
        text_h = "четвертого часа утра";
        break;
    case 4:
        text_h = "пятого часа утра";
        break;
    case 5:
        text_h = "шестого часа утра";
        break;
    case 6:
        text_h = "седьмого часа утра";
        break;
    case 7:
        text_h = "восьмого часа утра";
        break;
    case 8:
        text_h = "девятого часа утра";
        break;
    case 9:
        text_h = "десятого часа дня";
        break;
    case 10:
        text_h = "одиннадцатого часа дня";
        break;
    case 11:
        text_h = "двенадцатого часа дня";
        break;
    case 12:
        text_h = "первого часа дня";
        break;
    case 13:
        text_h = "второго часа дня";
        break;
    case 14:
        text_h = "третьего часа дня";
        break;
    case 15:
        text_h = "четвертого часа дня";
        break;
    case 16:
        text_h = "пятого часа дня";
        break;
    case 17:
        text_h = "шестого часа";
        break;
    case 18:
        text_h = "седьмого часа";
        break;
    case 19:
        text_h = "восьмого часа вечера";
        break;
    case 20:
        text_h = "девятого часа вечера";
        break;
    case 21:
        text_h = "десятого часа вечера";
        break;
    case 22:
        text_h = "одиннадцатого часа вечера";
        break;
    case 23:
        text_h = "двенадцатого часа ночи";
        break;
    default:  
        text_h = "неизвестного часа";
        break;
    } 
  }    

    switch(m) {
    case 41:
    case 42:
    case 43:    
    case 44:
        text_m = "почти без четверти";
        break;
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:   
    case 50:
        text_m = "без четверти";
        break;    
    case 51:
    case 52:
    case 53:
    case 54:
        text_m = "скоро";
        break;
    case 55:
    case 56:
    case 57:
    case 58: 
    case 59:
        text_m = "через малое время";
        break;
    }

  if ((m > 40 )) {
    switch(h) {
    case 0:
        text_h = "час ночи";
        break;    
    case 1:
        text_h = "два часа ночи";
        break;
    case 2:
        text_h = "три часа ночи";
        break;
    case 3:
        text_h = "четыре часа утра";
        break;
    case 4:
        text_h = "пять часова утра";
        break;
    case 5:
        text_h = "шесть часоа утра";
        break;
    case 6:
        text_h = "семь часа утра";
        break;
    case 7:
        text_h = "восемь часов утра";
        break;
    case 8:
        text_h = "девять часов утра";
        break;
    case 9:
        text_h = "десять часов дня";
        break;
    case 10:
        text_h = "одиннадцать часов дня";
        break;
    case 11:
        text_h = "двенадцать часов дня";
        break;
    case 12:
        text_h = "час дня";
        break;
    case 13:
        text_h = "два часа дня";
        break;
    case 14:
        text_h = "три часа дня";
        break;
    case 15:
        text_h = "четыре часа дня";
        break;
    case 16:
        text_h = "пять часов";
        break;
    case 17:
        text_h = "шесть часов";
        break;
    case 18:
        text_h = "семь часов";
        break;
    case 19:
        text_h = "восемь часов вечера";
        break;
    case 20:
        text_h = "девять часов вечера";
        break;
    case 21:
        text_h = "десять часов вечера";
        break;
    case 22:
        text_h = "одиннадцать часов вечера";
        break;
    case 23:
        text_h = "полночь";
        break;
    default:  
        text_h = "неизвестного часа";
    }   
  }  
  
  switch(m) {
    case 0:    
        text_m = "";
        break; 
    }

  if ((m == 0 )) {
    switch(h) {
    case 0:
        text_h = "полночь";
        break;    
    case 1:
        text_h = "час ночи";
        break;
    case 2:
        text_h = "два часа ночи";
        break;
    case 3:
        text_h = "три часа ночи";
        break;
    case 4:
        text_h = "четыре часа утра";
        break;
    case 5:
        text_h = "пять часова утра";
        break;
    case 6:
        text_h = "шесть часоа утра";
        break;
    case 7:
        text_h = "семь часа утра";
        break;
    case 8:
        text_h = "восемь часов утра";
        break;
    case 9:
        text_h = "девять часов утра";
        break;
    case 10:
        text_h = "десять часов дня";
        break;
    case 11:
        text_h = "одиннадцать часов дня";
        break;
    case 12:
        text_h = "двенадцать часов дня";
        break;
    case 13:
        text_h = "час дня";
        break;
    case 14:
        text_h = "два часа дня";
        break;
    case 15:
        text_h = "три часа дня";
        break;
    case 16:
        text_h = "четыре часа дня";
        break;
    case 17:
        text_h = "пять часов";
        break;
    case 18:
        text_h = "шесть часов";
        break;
    case 19:
        text_h = "семь часов";
        break;
    case 20:
        text_h = "восемь часов вечера";
        break;
    case 21:
        text_h = "девять часов вечера";
        break;
    case 22:
        text_h = "десять часов вечера";
        break;
    case 23:
        text_h = "одиннадцать часов вечера";
        break;
    default:  
        text_h = "неизвестного часа";
    }   
  }    
          
          
    var time = "—" + " " + text_m + " " + text_h + " " + "—";    
    var delta = document.getElementById("MyClockDisplay").textContent; 

    if ((delta != time)) {
        let element = document.getElementById('MyClockDisplay');
        let opacity = 0;
        element.style.opacity = opacity;
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
        let interval = setInterval(function() {
        if (opacity < 1) {
        opacity += 0.05;
        element.style.opacity = opacity;
        } else {
        clearInterval(interval);
        }
        }, 100);
}
      
    setTimeout(showTime, 15000); 

}
  
showTime();