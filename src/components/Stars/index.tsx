import React from 'react';
import { Container,StarsView, Text } from './styles';

import StarEmpty from '../../assets/star_empty.svg'
import Star from '../../assets/star_half.svg'
import StartFull from '../../assets/star.svg'

type Props = {
    stars: number
}


export function Stars({stars} : Props) {
    let i = stars / 2
    let s = [0, 0, 0, 0, 0 ]
    let floor = Math.floor(i)
    let left = i - floor

    for(var item=0; item<floor; item++){
        s[item] = 2
    }
    if(left > 0.49){
        s[item] = 1
    }


  return (
    <Container>
        {s.map((item, k)=>(
            <StarsView key={k}>
                {item === 0 && <StarEmpty width={18} height={18} fill={'#cecece'}/>}
                {item === 1 && <Star width={18} height={18} fill={'#FDBF5C'}/>}
                {item === 2 && <StartFull width={18} height={18} fill={'#FDBF5C'}/>}
            </StarsView>
        ))}

    </Container>
  );
}