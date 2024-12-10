import style from './Person.module.css'

const Person =({name,age})=>{
return(
    <div className={style.person}>
        <h4>Name: {name}, Age: {age}</h4>

    </div>
)
}
export default Person;