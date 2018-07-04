var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Proyecto', function(error){
   if(error){
      throw error;
   }else{
      console.log('Conectado a MongoDB');
   }
});
