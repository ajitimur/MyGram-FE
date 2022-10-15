import { getPhotos } from "../data/service";
import { Photo } from "../domain/entity";

const getPhotosOption: any = async () => {
  const resp = await getPhotos()
  
  
  return resp
}

export default getPhotosOption