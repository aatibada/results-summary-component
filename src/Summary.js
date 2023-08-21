import Category from './Category';
import data from './data.json';

const Summary = () => {
  return (
    <section>
      <h1>Summary</h1>
      {data.map(category => {
        return (
          <Category
            key={category.category}
            category={category.category}
            score={category.score}
            icon={category.icon}
          />
        );
      })}
      <button type="button">Continue</button>
    </section>
  )
}
export default Summary;