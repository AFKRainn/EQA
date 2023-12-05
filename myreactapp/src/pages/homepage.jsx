import Image from '../components/topimage/image';
import Experience from '../components/exp/experience'
import './CSS/homepage.css';





function HomePage() {
    return (
        <div>
            <Image />
            <div className='exp-div'>
                <Experience />
            </div>
        </div>
    )
}


export default HomePage;
