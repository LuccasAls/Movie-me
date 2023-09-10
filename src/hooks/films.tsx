import React, {createContext, useState, useContext, ReactNode, useEffect } from 'react';

import tmdb from '../services/tmdb';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useAuth } from './auth';

type FilmsProviderProps = {
    children: ReactNode;
    
}
type FilmsContextProps = {
    loading: boolean,
    trending: any,
    upComing: any,
    categories: any,
    byId: string,
    getById,
    clearId
}
export const FilmsContext = createContext({} as FilmsContextProps)

function FilmsProvider({children}: FilmsProviderProps){
    const [loading, setLoading] = useState(true);
    const [trending, setTrending] = useState([]);
    const [upComing, setUpComing] = useState([]);
    const [categories, setCategories] = useState([]);
    const {getItem} = useAsyncStorage("@movie-me:user")
    const [byId, setById] = useState('')

    
    


    getById()
    
    useEffect(() => {
        
        const loadingAll = async () => {
          const [trendingList, upComingList, categoriesList] = await Promise.all([
            tmdb.trending(),
            tmdb.upComing(),
            tmdb.Categories(),
        
            
          ])
          
          setTrending(trendingList[0].items.results);
          setUpComing(upComingList[0].items.results);
          setCategories(categoriesList[0].items);
    
          if(trendingList && upComingList && categoriesList ) {
            setLoading(false)
          }
        }
        loadingAll();
        
      }, [])

      

      
    async function getById() {
        const response = await getItem()
        const data =  response ? JSON.parse(response) : [];
        const id = data[0]?.id
        setById(id)
        return 
        
    }

    function clearId() {
        setById(' ')
    }


    


      







    return (
        <FilmsContext.Provider
            value={{
                loading,
                trending,
                upComing,
                categories,
                byId,
                getById,
                clearId
                
            }}
        >
            {children}
        </FilmsContext.Provider>
    )

}
function useFilms() {
    const context = useContext(FilmsContext)
    return context;
}

export {
    FilmsProvider,
    useFilms
}