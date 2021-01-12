class ResHelper{

    created(res,data){
        res.status(200).send({
            success: true,
            message: "Created",
            data: data,
          });
    }

    updated(res){
        res.status(200).send({
            success: true,
            message: "Updated",
            data: null,
          })
    }

    deleted(res){
        res.status(200).send({
            success: true,
            message: "Deleted",
            data: null,
          })
    }

    failedCustom(res, message) {
        res.status(403).send({
          success: false,
          message: message,
          data: null,
        });
      }

      successCustom(res, message) {
        res.status(200).send({
          success: true,
          message: message,
          data: null,
        });
      }

      responseData(res, data) {
        res.status(200).send({
          success: true,
          message: null,
          data: data,
        });
      }

      serverFailing(res,message){
        res.status(500).send({
          success: false,
          message: message,
          data: null
        })
      }

}

const resHelper = new ResHelper();
export default resHelper;