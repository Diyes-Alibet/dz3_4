import React from 'react';
import Description from "../../components/description/Description.jsx";
import style from './MainPage.module.css';
import Person from "../../components/person/Person.jsx";

const MainPage = () => {
    const data  ={
        title:"title",
        description:'description'
    }
    const numbers = [
        { id: 1, age: 25, name: 'John' },
        { id: 2, age: 30, name: 'Alice' },
        { id: 3, age: 22, name: 'Bob' }
    ];
    return (
        <div className={style.MainPage}>
            <Description data ={data}/>
            <h2 className={style.title}>MainPage</h2>
            {
                numbers.map((el)=>(
                    <Person key={el.id} age={el.age} name={el.name}/>
                ))
            }
        </div>
    )
}
export default MainPage;