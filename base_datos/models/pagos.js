const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pagosSchema  = new Schema({
  envio: Number,
  metodo: String,
  cantidad: Number
});

const pagosModel = mongoose.model('pagos', pagosSchema);

module.exports = {
  create: (req,res,next)=>{
      const pago = new pagosModel({
        _id: new mongoose.Types.ObjectId(),
        envio: req.body.envio,
        metodo: req.body.metodo,
        cantidad : req.body.cantidad
      });
      pago
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'Pago creado con exito',
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
     pagosModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Pago Actualizado'
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
         .select('_id envio metodo cantidad')
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
    pagosModel.find()
      .select('_id envio metodo cantidad')
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
      pagosModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Pago eliminado'
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
