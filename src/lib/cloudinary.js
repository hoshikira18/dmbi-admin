export function uploadImageCloudinary(images) {
    const formData = new FormData();
    formData.append('file', images[0]);

    formData.append('upload_preset', 'preset-next-test');

    return fetch('https://api.cloudinary.com/v1_1/dt3rk0j3l/image/upload', {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error('Image upload error:', error);
        });
}
