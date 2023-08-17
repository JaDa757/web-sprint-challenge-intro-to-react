import React, { useState } from 'react'

function Character({ info }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState)
  };

  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */}
      <div className="character-card" onClick={toggleHomeworld}>        
      <h3 className="character-name">{info.name}</h3>          
      {showHomeworld && (
        <p className="character-planet">{info.homeworld ? info.homeworld.name : 'Loading...'}</p>
      )}
    </div>

    </div>
  )
}

export default Character
