

const Category = (props) => {
  const { category, score, icon } = props;
  return (
    <div className="category" id={category}>
      <div className='category-declaration'>
        <img src={icon} alt={`${category} icon`} />
        <p>{category}</p>
      </div>
      <p className='score'>
        <span>{score}</span> / 100
      </p>
    </div>
  );
};
export default Category;
