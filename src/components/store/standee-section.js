/* eslint-disable @next/next/no-img-element */
import React from 'react';
import EditStandee from './edit-standee';
import { CardTitle } from '../ui/card';

const StandeeSection = ({ store, handleUpdate }) => {
    return (
        <div className="space-y-5 border-b-2 py-5">
            <div className="flex items-center space-x-1">
                <EditStandee handleUpdate={handleUpdate} />
                <CardTitle>Standee</CardTitle>
            </div>
            <img
                src={store?.metadata?.standee}
                alt="standee"
                className="mx-auto w-1/4"
            />
        </div>
    );
};

export default StandeeSection;
