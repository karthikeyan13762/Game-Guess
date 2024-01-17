import React from 'react'

function Result({SecretNumber,terms}) {
    let result;

    if(terms){
        if (terms>SecretNumber){
            result ="Higher"
        }
        else if(terms<SecretNumber){
            result ="Lower"
        }
        else if(terms == SecretNumber){
            result ="Correct"
        }
        else{
            result="Enter a valid Number"
        }


    }

    


  return (
    <div>
    <h3>You Gussed: {result}</h3>
    </div>
  )
}

export default Result