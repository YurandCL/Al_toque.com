const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const enviosSchema  = new Schema({
  producto: Number,
  usuario: Number,
  direccion: String,
  fecha: Date,
  estado: String
});

const enviosModel = mongoose.model('envios', enviosSchema);

module.exports = {
  create: (req,res,next)=>{
      const envio = new enviosModel({
        _id: new mongoose.Types.ObjectId(),
        producto: req.body.producto,
        usuario: req.body.usuario,
        direccion: req.body.direccion,
        fecha: req.body.fecha,
        estado : req.body.estado
      });
      envio
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'Envio creado con exito',
                  data: {
                      ...result
                  }
              });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error:err
                });
            });
   },

   update:(req,res,next) => {
     const id = req.params.id;
     let updateParams = {
         ...req.body
     };
     enviosModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Envio Actualizado'
           });
         })
         .catch(err =>{
             console.log(err);
             res.status(500).json({
                 error: err
             });
         });
   },

   findOne: (req,res,next)=>{
     const id = req.params.id;
     Plan.findById(id)
         .select('_id producto usuario direccion fecha estado')
         .exec()
         .then(doc => {
             if(doc){
               res.status(200).json({
                   data: doc,
               });
             }else{
               res.status(404).json({message: 'No valid entry found for provided ID'});
             }
         })
         .catch(err => {
             console.log(err);
             res.status(500).json({
                 error: err
             });
         });
},
  find: (req,res,next) => {
    enviosModel.find()
      .select('_id producto usuario direccion fecha estado')
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          data: docs.map(doc=>{
            return{
              ...doc
            };
          })
        };
        res.status(200).json(response);
      })
      .catch(err=>{
        console.log(err);
        res.status(500).json({
          error:err
        });
      });
  },
  delete: (req,res,next)=>{
      const id = req.params.id;
      enviosModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Envio eliminado'
              });
          })
          .catch(err =>{
              consoles.log(err);
              res.status(500).json({
                error: err
              });
          });
  }

};
