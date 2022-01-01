const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_APIKEY,
    api_secret: process.env.CLOUD_APISECRET,
});

const upload = async (req, res) => {
    let result = await cloudinary.uploader.upload(req.body.image, {
      public_id: `${Date.now()}`,
      resource_type: "auto", // jpeg, png
    });
    const data = {
      public_id: result.public_id,
      url: result.secure_url,
    }
    return data
};

const remove = async (req) => {
    let image_id = req.body.public_id;

    const data = cloudinary.uploader.destroy(image_id, (err, result) => {
        if (err) return 1
        return result
    });
    return 1
}

module.exports = {
      upload,
      remove
}