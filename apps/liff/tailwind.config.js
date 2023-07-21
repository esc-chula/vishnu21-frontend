// tailwind config is required for editor support

const sharedConfig = require('tailwind-config/tailwind.config.js');

module.exports = {
    presets: [sharedConfig],
    theme: {
        extend: {
            boxShadow: {
                details:
                    '0px 4px 8px rgba(0, 0, 0, 0.25), inset 0px -2px 9px rgba(122, 54, 227, 0.35)',
            },
            brightness: {
                25: '.25',
            },
        },
    },
};
