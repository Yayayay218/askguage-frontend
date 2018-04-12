const config = {
    URL: process.env.NODE_ENV === 'development' ? 'http://138.197.143.187:3000/api/v1' : 'https://apps.askgauge.ca/api/v1',
    // URL: 'http://138.197.143.187:3000/api/v1',
    SECRET_KEY: 'peWseTYsjSLDzZBFYhJb2ouZUxPMAHbR'
};


export default config


// db.CustomUser.update({'id':ObjectId("5ab65d2840fccd000e93dd4a")},{$set:{'email':'suthagar@gmail.com'}},{multi:true})