import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { medusaClient } from './config';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const uploadFile = async (file) => {
    const url = await medusaClient.admin.uploads
        .create(file)
        .then(({ uploads }) => uploads[0].url)
        .catch((error) => {
            console.log(error);
        });
    return url;
};

export const uploadFiles = async (files) => {
    const urls = await Promise.all(
        Array.from(files).map(async (file) => {
            return await uploadFile(file);
        })
    );
};

export const formatDate = (date) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(date).toLocaleDateString("VI", options)
}

export const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number)
}

