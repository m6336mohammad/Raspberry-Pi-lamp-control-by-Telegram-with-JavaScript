import { Gpio } from 'onoff';
var LED = new Gpio(17,'out');


const TelegramBot = require('node-telegram-bot-api');
const token = '5933224301:AAGwrZdULg3rp7SI-SNoEwxXWgOPyjtdDFo';
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/start/ , msg=>{

  bot.sendMessage(msg.chat.id, 'salam ' + '  ' + msg.chat.first_name + '    username:   ' + msg.chat.username +  '   your ID: ' + msg.chat.id,
  
    
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