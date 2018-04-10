const config = {
    URL: process.env.NODE_ENV === 'development' ? 'http://138.197.143.187:3000/api/v1' : 'https://apps.askgauge.ca/api/v1',
    // URL: 'http://138.197.143.187:3000/api/v1',
    SECRET_KEY: 'peWseTYsjSLDzZBFYhJb2ouZUxPMAHbR'
};


export default config