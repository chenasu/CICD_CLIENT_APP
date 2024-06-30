import { useCallback, useState } from 'react';
import './NamesInput.css';

export default function NamesInput({ label }) {
    const [resNames, setResNames] = useState(null);

    const onNamesSubmit = useCallback(async (event) => {
        event.preventDefault();
        // handle form submission
        const target = event.target;
        const firstName = target[0].value;
        const lastName = target[1].value;
        console.log('target[0]', firstName);
        console.log('target[1]', lastName);
        const url = 'https://cicd-demo-server.onrender.com/names';
        
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({firstName: firstName, lastName: lastName}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseBody = await response.json();
        console.log('response: ', responseBody );
        setResNames(responseBody.names);
    },[]);


  return (
    <div>
     {resNames && <label>{resNames.firstName + ' ' + resNames.lastName}</label>}
      <div className="test">
        <label>{label}</label>
        <form onSubmit={onNamesSubmit}>
          <label>
            first name <input name="first_name"/>
          </label>
          <label>
            last name <input name="last_name"/>
          </label>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
}
