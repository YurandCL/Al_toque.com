const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const proveedoresSchema  = new Schema({
  nombre_empresa: String,
  numero_empresa: Number,
  ruc: Number,
  producto: String,
  cantidad_otorgada: Number,
  precio_unidad: Number
});

const proveedoresModel = mongoose.model('proveedores', proveedoresSchema);

module.exports = {
  create: (req,res,next)=>{
      const proveedor = new proveedoresModel({
        _id: new mongoose.Types.ObjectId(),
        nombre_empresa: req.body.nombre_empresa,
        numero_empresa: req.body.numero_empresa,
        ruc: req.body.ruc,
        producto: req.body.producto,
        cantidad_otorgada : req.body.cantidad_otorgada,
        precio_unidad:req.body.precio_unidad
      });
      proveedor
            .save()
            .then(result => {
              res.status(200).json({
                  message: 'Proveedor creado con exito',
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
     proveedoresModel.update({_id: id},{$set: updateParams})
         .exec()
         .then(result => {
           res.status(200).json({
               message: 'Proveedor Actualizado'
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
         .select('_id nombre_empresa numero_empresa ruc producto cantidad_otorgada precio_producto')
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
    proveedoresModel.find()
      .select('_id nombre_empresa numero_empresa ruc producto cantidad_otorgada precio_unidad')
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
      proveedoresModel.remove({_id: id})
          .exec()
          .then(result => {
              res.status(200).json({
                  message: 'Proveedor eliminado'
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
