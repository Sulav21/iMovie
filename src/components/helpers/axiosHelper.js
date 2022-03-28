import axios from 'axios'

const apiEp = "http://www.omdbapi.com/?i=tt3896198&apikey=cd7171fc&";
export const fetchMovie = (title) =>{
    try {
      const response =   axios.get(apiEp+ "t="+title)
      return response
    } catch (error) {
        return error.message
    }
    
}