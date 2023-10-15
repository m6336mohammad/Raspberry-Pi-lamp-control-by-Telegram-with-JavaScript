import { Gpio } from 'onoff';
var LED = new Gpio(17,'out');


const TelegramBot = require('node-telegram-bot-api');
const token = '5933224301:AAGwrZdULg3rp7SI-SNoEwxXWgOPyjtdDFo';
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/start/ , msg=>{

  bot.sendMessage(msg.chat.id, 'hello ' + '  ' + msg.chat.first_name + '    username:   ' + msg.chat.username +  '   your ID: ' + msg.chat.id,
  
    
      {
        
        reply_markup:{
          
          'keyboard':[
          
              ['ON','OFF'],
              ['Abute']
            ]
          
          }
        
        }
  
    )
  
  })


  bot.on('message' ,msg=>{
    console.log(msg.text)
    if(msg.text == 'on'){
      bot.sendMessage(msg.chat.id, 'LED is ON banzen ')
      led.turnOn()
      
      }else if(msg.text == 'off'){
        
      bot.sendMessage(msg.chat.id, 'LED is OFF banzen ')
      turnOff()
        
        }
        
        
        switch(msg.text){
          
          case 'ON':
            bot.sendMessage(msg.chat.id, 'LED is ON banzen ')
            led.turnOn()
            break;
          case 'OFF':
            bot.sendMessage(msg.chat.id, 'LED is OFF banzen ')
            turnOff()
          break;
          
          case 'Abute':
            bot.sendMessage(msg.chat.id, 'ba ba banzen K  ')
          break;
          }
        
    })







//class for control pin out and on / off function
  class LEDController {
    constructor(pin) {
      this.LED = new Gpio(pin, 'out');
    }
  
    turnOn() {
      this.LED.writeSync(1);
    }
  
    turnOff() {
      this.LED.writeSync(0);
    }
  }
  
  const led = new LEDController(17);
  // led.turnOn();
  