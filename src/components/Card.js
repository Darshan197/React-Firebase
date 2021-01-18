const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <span>{props.title}</span>
            </div>
            <div className="card-body">
                { props.children }
            </div>
            <div className="card-footer">
                
            </div>
        </div>
    )
}

export default Card