import React , { memo , useMemo} from "react";

import Header from './card/Header';
import Info from './card/Info';
import Stats from './card/Stats';

const Card = player => {


    const stats = useMemo(
        () => {

            if (!player.data?.last) return {}

            const { data : { last } } = player

            const wins = last.reduce(
                (wins, current) => {
                    return wins + current
                }
                , 0
            )

            const loss = last.length - wins;
            return { wins , loss }
        }
    )
  
    return (
        <div className="card shadow">
            <Header 
                picture={player.picture}
                firstname={player.firstname}
                lastname={player.lastname}
            />
            <Info
                age={player.data?.age}
                weight={player.data?.weight} 
                height={player.data?.height}
            />
            <Stats
                rank={player.data?.rank}
                {...stats}
            />
        </div>
    )
}

export default memo(Card);