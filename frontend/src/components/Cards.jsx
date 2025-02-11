import 'react';
import 'react-dom';

function Cards({ item })  {
  return ( 
     <>
        <div className='my-3 mt-4 p-3'>
          <div className='card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200'>
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.category}</div>
              </h2> 
              <p> {item.title}</p>
              <div className="justify-end card-actions">
                <div className="badge badge-outline">${item.price}</div>
                <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500">BUY</div>
              </div>
            </div>
          </div>
        </div>
      </>
   );
}

export default Cards;

