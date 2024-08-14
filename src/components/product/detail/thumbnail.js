/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { EditThumbnail } from '../edit';

const Thumbnail = ({ thumbnail, handleUpdate }) => {
    return (
        <div>
            <h2 className="my-2 flex items-center text-xl font-semibold">
                <EditThumbnail handleUpdate={handleUpdate} />
                <span>Ảnh đại diện</span>
            </h2>
            <div className="flex items-center">
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    className="w-full rounded-md border-2 border-gray-200 object-cover"
                />
            </div>
        </div>
    );
};

export default Thumbnail;
