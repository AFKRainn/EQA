import './image.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Image() {
    return (
        <div className='image-div'>
            <img src={process.env.PUBLIC_URL + "/image.png"} alt="EQA" />
        </div>
    )
}


export default Image;
