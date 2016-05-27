'use strict';
module.exports = (router, models) => {

  const Resource = models.Toy;
  const resource = 'toys';

  router.route('/'+resource)
    .get((req, res) => {
      Resource.find({}, (err, data) => {
        if (err) return res.status(500).json({msg:'error retreiving '+resource, err: err});
        return res.status(200).json({msg:'all '+resource, data: data});
      });
    })
    .post((req, res) => {
        let newResource = new Resource(req.body);
        newResource.save((err, data) => {
          if (err) return res.status(500).json({msg:'error creating '+req.body.name, err: err});
          return res.status(200).json({msg:'created '+data.name, data: data});
        });
    });

  router.route('/'+resource+'/:id')
    .delete((req, res) => {
      Resource.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(500).json({msg:'error deleting '+req.body.name, err: err});
        return res.status(200).json({msg:`deleted ${resource}:${req.params.id}`});
      })
    })

}
