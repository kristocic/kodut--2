const Linn = (props) => (
    <div>
        <div> <h1>{props.andmed.nimi}</h1></div>
        <div><p>{props.andmed.kirjeldus}</p></div>
        <img src={props.andmed.pilt} alt='' />
    </div>
)

export default Linn