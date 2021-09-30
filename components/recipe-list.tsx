export default function RecipeList({ recipes }) {
  return (
    <section>
      <ol className="list-decimal">
        {recipes.map((recipe) => (
          <li key={recipe.slug}>
            <h3 className="text-3xl mb-3 leading-snug">{recipe.identifier}</h3>
          </li>
        ))}
      </ol>
    </section>
  )
}
