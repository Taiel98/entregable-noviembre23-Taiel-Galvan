//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div>
      <h2>Tu nombre es {props.nombre}</h2>
      <h2>Tu color favorito es {props.color}</h2>
    </div>
  );
}

export default Card;
