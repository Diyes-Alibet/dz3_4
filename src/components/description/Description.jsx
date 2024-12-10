import style from './Description.module.css';

const Description = ({data}) => {
    return(
        <div className={style.description}>
            <h1>{data.style}</h1>
            <p>{data.description}</p>

        </div>
    )
}
export default Description