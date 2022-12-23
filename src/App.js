import './App.css';
import {useState} from 'react'
import {useEffect} from "react";
import {getRandomName, getRandomColor, getRandomAge} from "./utils";

const GENERATE_INTERVAL = 5000;
const GET_HUNGER_TIME = 30000;
const HUNGRY_MAX_TIME = 5000;



function App() {

    const [state, setState] = useState({
        myCats : [],
        neighboursCats: []
    });

    function generateCat() {
        const hasCollar = Math.random() >= 0.5;

        const newCat = {
            name : getRandomName(),
            age: getRandomAge(),
            color: getRandomColor(),
            hasCollar,
            isHungry: false,
            hungryTime: new Date().getTime() + GET_HUNGER_TIME,
        }

        if (hasCollar) {
            const cats = state.myCats;
            cats.push(newCat)
            setState({...state, myCats: cats});
        }
        else {
            const cats = state.neighboursCats;
            cats.push(newCat)
            setState({...state, neighboursCats: cats});
        }
    }

    function updateHungryTimes() {
        const currentTime = new Date().getTime();
        const myCats = state.myCats.map(cat => {
            if (currentTime >= (cat.hungryTime)){
                cat.isHungry = true;
            }
            return cat;
        }).filter(cat => {
            const latestTimeToFeed = cat.hungryTime + HUNGRY_MAX_TIME;
            return currentTime < latestTimeToFeed
        });

        const neighboursCats = state.neighboursCats.map(cat => {
            if (currentTime >= (cat.hungryTime)){
                cat.isHungry = true;
            }
            return cat;
        }).filter(cat => {
            const latestTimeToFeed = cat.hungryTime + HUNGRY_MAX_TIME;
            return currentTime < latestTimeToFeed
        });

        setState({
            ...state,
            myCats: myCats,
            neighboursCats: neighboursCats,
        });

    }

    function generateCats(cats){
        return cats.map(i => {
            return (
                <div className='layout'>
                    <div className='margin'>
                        <h3 className='cat-name'>{i.name} : {i.age} years</h3>
                        <div className="cat-box" style={{background: i.color}}>
                        </div>
                    </div>

                    <div>
                        {i.isHungry ? <button className='feed-btn' onClick={() => {
                            const currentTime = new Date().getTime();
                            i.isHungry = false;
                            i.hungryTime = currentTime + GET_HUNGER_TIME;
                            setState(state);
                        }}
                        >Feed</button> : null}
                    </div>
                </div>

            );
        })
    }


    useEffect(()=> {
        setInterval(function (){
            generateCat();
        }, GENERATE_INTERVAL);

        setInterval(function () {
            updateHungryTimes();
        }, 1000)
    }, [])


    return (
      <div>
          <div className='main'>
              <tr className='text'>
                  <th>My Cats</th>
              </tr>

              <tr className='text'>
                  <th>Neighborhood Cats</th>
              </tr>

          </div>
          <div className='main'>
              <table>
                  <tr>
                      <td>
                          {generateCats(state.myCats)}
                      </td>
                  </tr>
              </table>

              <table>
                  <tr>
                      <td>
                          {generateCats(state.neighboursCats)}
                      </td>
                  </tr>
              </table>
          </div>

      </div>
  );
}

export default App;
