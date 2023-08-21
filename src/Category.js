

const Category = (props) => {
  const { category, score, icon } = props;
  return (
    <div>
      <img src={icon} alt={`${category} icon`} />
      <p>{category}</p>
      <p>
        <span>{score}</span> / 100
      </p>
    </div>
  );
};
export default Category;
