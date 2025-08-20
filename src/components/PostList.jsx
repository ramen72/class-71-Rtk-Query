import { useState } from "react";
import { useGetPostQuery } from "../services/postsApi";

const PostList = () => {
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowIndividualCart, setIsShowIndividualCart] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { data, error, isLoading } = useGetPostQuery();

  const handleClickForLoadingCard = () => {
    setIsShowCart(true);
    setIsShowIndividualCart(false);
  };
  const handleClickForLoadingIndividualCard = () => {
    setIsShowIndividualCart(true);
    setIsShowCart(false);
  };

  const handleShowingDetails = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };
  if (isLoading) return <p>Loading.....</p>;
  if (error) return <p>Error.....</p>;

  return (
    <>
      <div className={`px-10`}>
        <div className={`flex flex-wrap justify-center items-center gap-2`}>
          <button
            onClick={handleClickForLoadingCard}
            className={`font-bold text-gray-600 capitalize border border-gray-400 py-3 px-5 rounded-lg my-3 transition-all duration-300 hover:bg-gray-400 hover:text-white cursor-pointer`}
          >
            All Cards
          </button>
          <button
            onClick={handleClickForLoadingIndividualCard}
            className={`font-bold text-gray-600 capitalize border border-gray-400 py-3 px-5 rounded-lg my-3 transition-all duration-300 hover:bg-gray-400 hover:text-white cursor-pointer`}
          >
            Individual Card
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
          {isShowCart &&
            data.map((item) => (
              <div
                key={item.id}
                className={`border border-gray-500 rounded overflow-hidden`}
              >
                <div
                  className={`min-h-14 bg-blue-800 text-white flex justify-center items-center`}
                >
                  <h2 className={`font-bold text-center capitalize`}>
                    {item.title}
                  </h2>
                </div>
                <p className={`p-2 text-justify capitalize`}>{item.body}</p>
              </div>
            ))}
        </div>
        {isShowIndividualCart && (
          // <ul className={`grid grid-cols-5 gap-2`}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
            {data.map((item, index) => (
              <li key={item.id} onClick={(e) => handleShowingDetails(item.id)}>
                <div
                  className={`min-h-16 border-gray-400 rounded-lg overflow-hidden`}
                >
                  <div
                    className={`h-14 p-1 bg-blue-800 text-white flex justify-center cursor-pointer transition-all duration-200 hover:bg-blue-900 hover:text-white overflow-hidden`}
                  >
                    <h2 className={`font-bold text-center capitalize`}>
                      {item.title}
                    </h2>
                  </div>
                  {selectedId === item.id && (
                    <p className={`p-2 text-justify bg-blue-200 capitalize`}>
                      {item.body}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PostList;
