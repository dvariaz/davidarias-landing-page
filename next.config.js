module.exports = {
    webpack: function (config) {
        config.resolve.alias["@"] = path.join(__dirname, ".");
        return config;
    },
};
