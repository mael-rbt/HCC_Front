import { useState,useContext } from 'react'
import  {TokenContext} from '../provider'


const AddMatch = ()=>{

    const [nameCompetitor,setNameCompetitor] = useState('') ;

    const [scoreCompetitor,setScoreCompetitor] = useState(0) ;
    const [scoreTeam,setScoreTeam] = useState(0) ;
    const [date,setDate] = useState('') ;
    const [state, dispatch] = useContext(TokenContext);
    const [result ,setResult] = useState("")

  const handleAddMatch =(e)=>{
    e.preventDefault()
    const data = {
        concurrent: nameCompetitor,
        concurrentScore: scoreCompetitor,
        equipeScore: scoreTeam,
        date: date
    };

    fetch("http://localhost:3000/match/add",
    {method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': state.token

    },
    body: JSON.stringify(data)}
  )
  .then(response => response.json())
  .then(result => {
    setResult(result)
  })
 };

    return(
        <>
          <div className="boxForm">
              <form method='post'>
                <label htmlFor="nameCompetitor">Nom concurrent</label>
                <input type="text" name="nameCompetitor" value={nameCompetitor} onChange={(e) => setNameCompetitor(e.target.value)} />

                <label htmlFor="scoreCompetitor"> Score concurrent</label>
                <input type="number" name="scoreCompetitor" value={scoreCompetitor} onChange={(e) => setScoreCompetitor(e.target.value)}/>

                <label htmlFor="scoreTeam">Score equipe</label>
                <input type="number" name="scoreTeam" value={scoreTeam} onChange={(e) => setScoreTeam(e.target.value)} />

                <label htmlFor="date">Date</label>
                <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />

                <button onClick={handleAddMatch} >Ajouter</button>
              </form>  
          </div>        
        </>
    )
}

export default AddMatch