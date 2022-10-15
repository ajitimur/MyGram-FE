import { useEffect, useState } from 'react'
import ContentCard from '../../../components/card/contentCard'
import SideBar from '../../../components/sidebar'
import * as homeUseCase from '../usecase';
import type { Photo } from '../domain/entity';
import "../../../styles/home.css"

const Home = () => {

  const [photos, setPhotos] = useState<any>([])
  console.log(photos);
  
  
  useEffect(() => {
   getPhotosOptionDispatch()  
},[])
async function getPhotosOptionDispatch () {
    const res = await homeUseCase.getPhotosOption();
    setPhotos(res)
} 


  return (
    <div className='home'>
      <div className='side-bar'>
        <SideBar></SideBar>
      </div>
      <div className='photo_container'>
          <ul className='photo_list'>
              {/* loop photos */
              photos.map((el:any, index:number) => {
                return <li key={index} className="photo_li"><ContentCard photo={el} ></ContentCard></li>
              })
              }
          </ul>
      </div>
    </div>
  )
}

export default Home