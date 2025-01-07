import './card.scss';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <div className='card'>
      <Link href={`/${item.id}`} className='imageContainer'>
        <img src={item.img} />
      </Link>
      <div className='textContainer'>
        <h3 className='title'>
          <Link hrefLang={`/${item.id}`}>{item.title}</Link>
        </h3>
        <p className='address'>
          <img src='/pin.png' alt='' />
          <span>{item.address}</span>
        </p>
        <p className='price'>$ {item.price}</p>
        <div className='bottom'>
          <div className='features'>
            <div className='feature'>
              <img src='/bed.png' alt='' />
              <div className='feature-item'>
                <span>{item.bedroom}</span>
                <span>bedroom</span>
              </div>
            </div>
            <div className='feature'>
              <img src='/bed.png' alt='' />
              <div className='feature-item'>
                <span>{item.bathroom}</span>
                <span>bathroom</span>
              </div>
            </div>{' '}
          </div>
          <div className='icons'>
            <div className='icon'>
              <img src='/save.png' alt='' />
            </div>
            <div className='icon'>
              <img src='/chat.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
