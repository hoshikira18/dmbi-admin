import { clsx } from 'clsx';
import { formatAmount } from 'medusa-react';
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
