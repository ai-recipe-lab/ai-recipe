export default function RecipeCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold">
        🏆 おすすめレシピ
      </h2>

      <h3 className="mt-4 text-xl font-semibold">
        30分で人生初のホームページを作ろう
      </h3>

      <p className="mt-3 text-gray-600">
        必要AI：ChatGPT・Gemini・Claude Code
      </p>

      <p className="mt-2 text-gray-600">
        所要時間：約30分
      </p>

      <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-white">
        レシピを見る
      </button>
    </div>
  );
}