import UseFetchGif from '../hooks/UseFetchGif';
import Getitems from './Getitems';

const GifGrid = ({category}) => {

  const { imgData, isLoading } = UseFetchGif(category);

  return (
    <>
        <h3>{category}</h3>
        {isLoading ? (
          <div>
            Cargando Datos
          </div>
        ) : (
            <div className='card-grid'>
            {imgData.map((data) => (
              <Getitems key={data.id} {...data} />
            ))}
          </div>
        )}
    </>
  )
}

export default GifGrid;
