import imageData from "./DataComponents"

export default function GalleryBody(){
    return(
        <div>
            {
            imageData.map(image=>{
                return(
                <div key={image.id} className="column">
                    <img src={image.img} alt=""></img>
                </div>
                )
            })
            }
        </div>
    )

}

// export default Gallerybody