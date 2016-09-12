// Image list component

//Import React
import React from 'react';
import ImageDetail from './image_detail'

//Create the component
const ImageList = (props) => {
    const validImages = props.images.filter(image=> !image.is_album);
    const RenderedImages = validImages.map(image=>{
        return <ImageDetail key={image.title} image={image} />
    });
    return(
        <ul className="media-list list-group">
            {RenderedImages}
            
        </ul>
    );
}

//Export the component
export default ImageList;