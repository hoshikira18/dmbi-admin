import axios from 'axios';

export async function uploadImageToCloudinary(imageFile) {
    try {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append(
            'upload_preset',
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        ); // Replace with your Cloudinary upload preset

        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            formData
        );

        return response.data;
    } catch (error) {
        console.error('Image upload error:', error);
        throw error;
    }
}
