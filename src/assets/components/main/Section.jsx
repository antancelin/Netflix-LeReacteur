const Section = ({ data }) => {
  return (
    <>
      {data.map((elem, index) => {
        return (
          <div>
            <h2 key={index}>{elem.category}</h2>
            <div className="movies-list">
              {elem.images.map((elem, index) => {
                return <img src={elem} alt="img-tv" key={index} />;
              })}
            </div>
          </div>
        );
      })}
      ;
    </>
  );
};

export default Section;
