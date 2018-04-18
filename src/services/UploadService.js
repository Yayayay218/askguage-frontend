import config from '../Configs/AppSetting'

export const uploadFile = (params) => {
    console.log("Promise uploadFile: ", params);
    return new Promise((resolve, reject) => {
        if (params && params[0] instanceof File) {
            const formData = new FormData();
            formData.append('file', params[0]);
            fetch(config.URL + '/containers/images/upload', {
                method: 'post',
                body: formData,
            })
                .then(response => response.json())
                .then(file => {
                    const tmp = {
                        avatarUrl: file['result']['files']['file'][0]['name']
                    };
                    resolve(tmp)
                });
        } else {
            resolve(params);
        }
    });
};