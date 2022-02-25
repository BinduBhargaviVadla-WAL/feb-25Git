import axios from 'axios'
import {useState} from 'react'
const Form = props => {
    const [username, setUsername] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            props.onSubmit(resp.data)
            console.log(resp.data);
            setUsername('')
        })
    }
    return (
        <div >
            <h1>Github</h1>
            <form onSubmit={handleSubmit}>
            <input
            className='input'
                type="text"
                value={username}
                onChange={event =>
                    setUsername(event.target.value)} placeholder="GitHub username"
                required
            />
            <button className="btn" type="submit">Add card</button>
        </form>
        </div>
        
    )
}
export default Form