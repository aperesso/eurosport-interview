import { useEffect, useMemo,  useState } from 'react';

import Card from '../components/Card';
import { ENDPOINT} from '../config';

import '../scss/index.scss'
import '../scss/card.scss';

const App = () => {

    const [players, setPlayers] = useState([]);

    useEffect(
        () => {
            const fetchPlayers = async () => {
                const data = await new Promise(
                    resolve => {
                        fetch(ENDPOINT, { method : 'GET'})
                            .then(res => {
                                if (res.status !== 200) return null
                                return res.json()
                            })
                            .then(
                                res => resolve(res)
                            )
                        }
                    )
                setPlayers(data?.players)
            }
            fetchPlayers();
            return (
                () => setPlayers([])
            )
        }
       
    , [setPlayers])

    return (
        <div className="app">
            { players.map(
                (p, i) => <Card key={p.shortname || i} {...p}/>
            )}
        </div>
    )
}

export default App;