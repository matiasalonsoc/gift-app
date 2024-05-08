/* eslint-disable react/prop-types */
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <section className=' p-3 text-center flex flex-col items-center'>
      <h3 className='text-4xl font-semibold mt-10'> {category} </h3>
      {isLoading && <div className='spinner'></div>}
      <section className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 items-center'>
        {images.map(({ id, title, url }) => (
          <article
            className='text-center pb-3 bg-gray-200 rounded-xl shadow'
            key={id}
          >
            <GifItem title={title} url={url} />
          </article>
        ))}
      </section>
    </section>
  );
};
