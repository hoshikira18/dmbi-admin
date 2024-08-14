'use client';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const { default: DialogComponent } = require('@/components/common/dialog');
const { Button } = require('@/components/ui/button');
const { Input } = require('@/components/ui/input');
const { PencilLineIcon } = require('lucide-react');

const EditName = ({ handleUpdate }) => {
    const [newName, setNewName] = useState('');
    return (
        <DialogComponent
            triggerButton={
                <button className="mr-2">
                    <PencilLineIcon size={16} />
                </button>
            }
            title="Đổi tên sản phẩm"
        >
            <div className="space-y-2">
                <Label>Tên mới</Label>
                <Input
                    type="text"
                    onChange={(e) => {
                        setNewName(e.target.value);
                    }}
                />
                <Button onClick={() => handleUpdate({ title: newName })}>
                    Lưu
                </Button>
            </div>
        </DialogComponent>
    );
};

export default EditName;
