import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} className="h-60 w-60" alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="px-4 py-1 rounded-full border-[2px] ">
                ${item.price}
              </div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;