
import React, { useState } from "react";
function Profile() {
  const [profile, setProfile] = useState({ name: 'Alice', age: 25 });
  
  const birthday = () => {
      console.log({ ...profile });
      console.log({ profile });
    // On crée un nouvel objet en copiant les anciennes valeurs et en modifiant age
    const ageUpdated = profile.age + 1    // On crée un nouvel objet en copiant les anciennes valeurs et en modifiant age    
		setProfile({ ...profile, age: ageUpdated });
  };

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>Âge : {profile.age}</p>
      <button onClick={birthday}>Anniversaire</button>
    </div>
  );
}

export default Profile;