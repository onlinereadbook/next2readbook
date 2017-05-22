module.exports = {
    webpack: (config, { dev }) => {
        // Remove minifed react aliases for material-ui so production builds work
        if (config.resolve.alias) {
            delete config.resolve.alias.react
            delete config.resolve.alias['react-dom']
        }

        return config
    }
}