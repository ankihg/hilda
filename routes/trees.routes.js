'use strict';
const config = require('../config.js')
const http = require('http');
module.exports = (router, models) => {

  const Resource = models.Tree;
  const resource = 'trees';

  router.route('/'+resource)
    .get((req, res) => {
      Resource.find({}, (err, data) => {
        if (err) return res.status(500).json({msg:'error retreiving '+resource, err: err});

          Promise.all(data.map((d) => {
            return new Promise((resolve, reject) => {
              http.get(config.TRUNKS_OF_SEATTLE+'/trees/id/'+d.cityID, resp => {
                  var body = '';
                 resp.on('data', function(chunk) {
                   body += chunk;
                 });
                 resp.on('end', function() {
                   console.log(body);
                   resolve(body)
                 });
              })
            })}))
            .then(data => {
              console.log(data);
              return res.status(200).json({msg:'all '+resource, data: data});
            })

        // data = data.map((d) => {
        //   console.log(d);
        //   console.log(config.TRUNKS_OF_SEATTLE+'/trees/id/'+d.cityID);
        //   http.get(config.TRUNKS_OF_SEATTLE+'/trees/id/'+d.cityID, resp => {
        //       var body = '';
        //      resp.on('data', function(chunk) {
        //        body += chunk;
        //      });
        //      resp.on('end', function() {
        //        console.log(body);
        //      });
        //     return res.status(200).json({msg:'all '+resource, data: res.data});
        //
        //   })
        // })
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
    .put((req, res) => {
      Resource.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
        if (err) return res.status(500).json({msg:'error updating '+req.body.name, err: err});
        return res.status(200).json({msg:'updated '+data.name, data: data});
      })
    })
    .delete((req, res) => {
      Resource.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(500).json({msg:'error deleting '+req.body.name, err: err});
        return res.status(200).json({msg:`deleted ${resource}:${req.params.id}`});
      })
    });

}
