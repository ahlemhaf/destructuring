import React from 'react';
// c'est un destructuring dans une fct
// const Users = props=>{
//     //c'est un destructuring à l'interier de la fct ou bien le faire au niveau des parametres 
//   const {name,age}=props;
//   console.log(name,age);
//     return(
//         <div>
//             <p>Chanteur:</p>
//         </div>
//     )
// }

//c'est un destructuring dans une classe
class Users extends React.Component{
    render (){
        const {name, age}=this.props;
        return (
            <div>
                <p>Chanteur: {name} {age} ans</p>
            </div>
        )
    }
}
export default Users;