/* eslint-disable react/prop-types */
export const GifItem = ({ url, title }) => {
  return (
    <div>
      <img className=' rounded-t-xl' src={url} />
      <h3 className='font-bold'> {title} </h3>
    </div>
  );
};
