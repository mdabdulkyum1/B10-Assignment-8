import { useEffect, useState } from "react";

function Gadgets() {
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState("all");
 
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <div className="-mt-24 mb-12">
        <h1 className="text-center text-4xl font-bold mb-6">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className=" lg:flex justify-center gap-6">
          <div className="shadow-md p-6">
            <div className="flex flex-col gap-3">
              <button
              onClick={()=> setIsActive('all')}
                className={`${
                  isActive === 'all' ? "bg-purple text-white" : "bg-base-300"
                } py-2 rounded-3xl px-5 text-left`}
              >
                All Product
              </button>
              {categories.map((c) => (
                <button
                  key={c.category_id}
                  className={`${
                    isActive === c.category_id
                      ? "bg-purple text-white"
                      : "bg-base-300"
                  }  py-2 rounded-3xl px-5 text-left`}
                  onClick={() => setIsActive(c.category_id)}
                >
                  {c.category_name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 lg:ml-0">

          </div>
        </div>
      </div>
    </>
  );
}

export default Gadgets;