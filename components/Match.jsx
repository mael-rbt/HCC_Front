import { useEffect, useState,useContext } from 'react'
import {TokenContext} from "../provider"

const Match = ()=>{
  const [data, setData] = useState([]);
  const [state, dispatch] = useContext(TokenContext);
    useEffect(()=>{
        fetch('http://localhost:3000/match')
          .then(response => response.json())
          .then(response => {
            console.log(response)
            setData(response)
          });
    },[])

    return(
        <>
          <div className="boxMatch">
          <table className='match'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Équipe</th>
                <th>Score</th>
                <th>Score Adverse</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
          {state.token && <div className='loggedIn'><p>Vous êtes connecté !</p></div>}
          {data.map((item,index)=>{
              return <tr>
                <td key={item.id}>{item.id}</td>
                <td>{item.concurrent}</td>
                <td>{item.equipeScore}</td>
                <td>{item.concurrentScore}</td>
                <td>{item.date}</td>
              </tr>

          })}
          </tbody>
          </table>
          </div>
        </>
    )
}
export default Match

