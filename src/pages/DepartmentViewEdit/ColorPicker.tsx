import React, { useState } from 'react'
import { SketchPicker } from 'react-color';
import Badge from '../../components/common/Badge';
import BadgeContainer from '../../components/common/BadgeContainer';


const ColorPicker = () => {
    const [color, setColor] = useState('#fff')

    const handleChangeComplete = (color) => {
        console.log(color);

        setColor(color.hex);
    };

    return (
        <>
            <div className='p-5 w-25'>
                <SketchPicker
                    color={color}
                    onChange={handleChangeComplete}
                />


                <div className="d-flex justify-content-center">
                    <Badge color={color} text={'ahfvcdasyhvx'} editMode={false} />
                </div>
            </div>
        </>
    )
}

export default ColorPicker