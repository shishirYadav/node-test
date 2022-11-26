const ENUMS = require("./enums");
// const { json } = require("sequelize/types");


class Response {
    constructor(ack, msg, data) {
        this.responseStatus = ack;
        this.message = msg;
        this.data = data;
    }
}

exports.sendSuccessResponseObject = async (data, msg, res) => {
    let encData = await doEncryption.doEncrypt(JSON.stringify(data))
    let decData = await doEncryption.doDecrypt(encData)
    // console.log('enc data', encData);
    // console.log('dec data', decData);
    res.status(200).json(new Response(ENUMS.RESPONSE_CODE.SUCCESS, msg, data));
};

exports.sendFailureResponseObject = async (data, msg, res) => {
    res.status(404).json(new Response(ENUMS.RESPONSE_CODE.ERROR, msg, data));
};

