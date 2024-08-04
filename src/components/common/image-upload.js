import { set } from 'react-hook-form';
import { FormField, FormItem } from '../ui/form';
import { useEffect, useState } from 'react';
const ImageUpload = ({ multiple = false, files, setFiles }) => {
    const [preview, setPreview] = useState([]);

    useEffect(() => {
        if (files) {
            setPreview(files.map((file) => URL.createObjectURL(file)));
        }
        return () => {
            setPreview(['']);
        };
    }, [files]);

    const handleUpload = (e) => {
        const files = Array.from(e.target.files);
        setFiles(files);
        setPreview(files.map((file) => URL.createObjectURL(file)));
    };

    return (
        <div className="max-h-[500px] space-y-4 overflow-scroll">
            <FormField
                name={`image${multiple ? 's' : ''}`}
                render={({ field }) => (
                    <FormItem>
                        <label htmlFor={`image${multiple ? 's' : ''}`}>
                            Hình ảnh
                        </label>
                        <input
                            id={`image${multiple ? 's' : ''}`}
                            type="file"
                            multiple={multiple}
                            placeholder="https://example.com/image.jpg"
                            className="max-w-sx file-input file-input-bordered file-input-info w-full bg-white text-gray-600"
                            onChange={handleUpload}
                        />
                    </FormItem>
                )}
            />
            <div className="flex flex-wrap gap-4">
                {files &&
                    preview.map((image) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={image}
                            src={image}
                            alt="Preview"
                            className="w-full rounded-lg border border-gray-300 object-cover"
                        />
                    ))}
            </div>
        </div>
    );
};

export default ImageUpload;
