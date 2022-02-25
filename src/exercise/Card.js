const Card = props => {
    return (
        <div style={{ margin: '1em' }} className="card">
            <div>
                <h2>{props.name}</h2>
                <img alt="avatar" style={{ width: '70px' }}
            src={props.avatar_url} />
            <h5><a href={props.blog}> {props.blog} </a></h5>
            <h5>{props.bio}</h5>
            <h5>{props.company}</h5>
            <h5>{props.location}</h5>
            </div>
        </div>
    )
}
export default Card