/* eslint-disable @next/next/no-img-element */
import React from 'react';
import EditImage from './edit-image';
import { Label } from '../ui/label';
import dynamic from 'next/dynamic';

const FroalaEditorView = dynamic(
    () => import('react-froala-wysiwyg/FroalaEditorView'),
    { ssr: false }
);

const AboutSection = ({ store, handleUpdate }) => {
    return (
        <div className="grid grid-cols-2 gap-10 border-b-2 pb-5">
            <div className="col-span-2 flex items-center px-20 lg:col-span-1">
                <EditImage handleUpdate={handleUpdate} />
                <img src={store?.metadata?.image} alt="about-image" />
            </div>
            <div className="col-span-2 px-5 lg:col-span-1">
                <Label>Giới thiệu: </Label>
                <FroalaEditorView model={store?.metadata?.about} />
            </div>
        </div>
    );
};

export default AboutSection;
