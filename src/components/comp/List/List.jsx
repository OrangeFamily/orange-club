import s from './List.module.scss'
import halloween from '../../img/halloween.png'
 export const List = ({data, onModal}) => {

    return data.map(e=>(
     
        <div
      key={e.id}
      onClick={() => onModal(e.title, e.price, e.text, e.src, e.allergy)}
      className={s.item}
    ><div className={s.Hall}>{e.isHalloween ? <img src={halloween} alt="halloween" className={s.halloweenWor}/> : null}<img src={e.src} alt="" className={s.sizeImg} /></div>
      <div>
        <div className={s.itemMain}><h3 className={s.title}>{e.title}{e.isNew ? <span className={s.newWord}>NEW</span> : null}{e.isHot ? <span className={s.newWord}>HOT</span> : null}</h3>

        <h3 className={s.price}>{e.price}</h3></div>
        
        <p className={s.text}>{e.text}</p>
      </div>

      
    </div>
    
      
    ));
    };

 