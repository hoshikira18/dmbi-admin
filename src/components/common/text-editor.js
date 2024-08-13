'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { uploadImageToCloudinary } from '@/lib/cloudinary';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

const FroalaEditor = dynamic(() => import('react-froala-wysiwyg'), {
    ssr: false,
});

const TextEditor = () => {
    const [value, setValue] = useState('');

    const config = {
        events: {
            'image.beforeUpload': async function (images) {
                // Use the custom upload function
                try {
                    const data = await uploadImageToCloudinary(images[0]);

                    // Insert the image into the editor
                    this.image.insert(
                        data.secure_url,
                        false,
                        null,
                        this.image.get(),
                        null
                    );

                    // Optionally add data attributes to the image
                    const $img = this.image.get();
                    $img.attr('data-id', data.public_id);
                } catch (error) {
                    console.error('Image upload error:', error);
                }

                // Prevent the default image upload
                return false;
            },
        },
    };

    return (
        <div>
            <FroalaEditor
                model={value}
                tag="textarea"
                config={config}
                onModelChange={(e) => {
                    setValue(e);
                    console.log(e);
                }}
            />
            <FroalaEditorView model={value} />
        </div>
    );
};

export default TextEditor;
