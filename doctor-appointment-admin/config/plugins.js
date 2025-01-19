const api = require("./api");

module.exports = ({env}) => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: 'dmhvxpw9x',
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions:{
                upload: {},
                delete: {},
                uploadStream: {},
            },
        },
    },
});
