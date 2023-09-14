import React from 'react';
import { Container, FlatGenres, Text, Context, Gap} from './styles';

type Props ={
    items: any[]
}

export function Genres({items} : Props) {
    

      
      const genres: any = {
        
        28: "Ação",
        12: "Aventura",
        16: "Animação",
        35: "Comédia",
        80: "Crime",
        99: "Documentário",
        18: "Drama",
        10751: "Família",
        14: "Fantasia",
        36: "História",
        27: "Terror",
        10402: "Música",
        9648: "Mistério",
        10749: "Romance",
        878: "Ficção Científica",
        10770: "Cinema TV",
        53: "Thriller",
        10752: "Guerra",
        37: "Faroeste"
      }
        
    
      
  return (
    <Container>
        <FlatGenres
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={Gap}
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <Context>

                    <Text>{genres[item]}</Text>
                    
                </Context>
            )}
        />

  
            
    </Container>
    
    
  );
}