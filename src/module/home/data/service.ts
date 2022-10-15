import { createApi } from "unsplash-js";


const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "7pjOurOj4qceahK1ABzD8S6EjrHlQ1RDpZTjcETwK2M"
});

export const getPhotos = async () => {
  try {
    const resp = await api.search
      .getPhotos({ query: "dog", orientation: "landscape", page: 1, perPage: 10 })
      .then(result => {
        return result.response?.results
      })
      .catch(err => {
        throw err
      })
    return resp
  } catch (error: any) {
    throw error
  }
}