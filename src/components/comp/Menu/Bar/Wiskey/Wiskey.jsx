import s from './Wiskey.module.scss'
 export const Wiskey = ({data, onModal}) => {

    return data.map(e=>(
     
        <div
      key={e.id}
      onClick={() => onModal(e.title, e.price, e.text, e.src)}
      className={s.item}
    ><img src={e.src} alt="" className={s.sizeImg} />
      <div>
        <div className={s.itemMain}><h3 className={s.title}>{e.title}</h3>

        <h3 className={s.price}>{e.price}</h3></div>
        
        <p className={s.text}>{e.text}</p>
      </div>

      
    </div>
    
      
    ));
    };

 