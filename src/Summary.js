import Category from './Category';
import data from './data.json';

const Summary = () => {
  return (
    <section className="summary">
      <h1>Summary</h1>
      <div className="categories">
        {data.map((category) => {
          return (
            <Category
              key={category.category}
              category={category.category}
              score={category.score}
              icon={category.icon}
            />
          );
        })}
      </div>
      <button type="button">Continue</button>
    </section>
  );
}
export default Summary;