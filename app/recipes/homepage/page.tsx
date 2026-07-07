export default function HomepageRecipe() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-900">
          ← トップへ戻る
        </a>

        <div className="mt-10">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            ホームページ
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight">
            AIで初めてホームページを作る
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            専門知識ゼロでも大丈夫。AIと会話しながら、自分のホームページを作る手順を紹介します。
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold">
            このレシピで使うAI・ツール
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-gray-100 px-4 py-2">
              ChatGPT
            </span>
            <span className="rounded-full bg-gray-100 px-4 py-2">
              VS Code
            </span>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold">作り方</h2>

          <div className="mt-8 space-y-8">
            <div>
              <p className="font-bold text-orange-600">STEP 1</p>
              <h3 className="mt-2 text-xl font-bold">
                ChatGPTに作りたいサイトを相談する
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                まずは難しく考えず、「こんなサイトを作りたい」とAIに伝えます。
              </p>
            </div>

            <div>
              <p className="font-bold text-orange-600">STEP 2</p>
              <h3 className="mt-2 text-xl font-bold">
                必要なコードを作ってもらう
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                AIに初心者向けの手順でコードを作ってもらいます。
              </p>
            </div>

            <div>
              <p className="font-bold text-orange-600">STEP 3</p>
              <h3 className="mt-2 text-xl font-bold">
                VS Codeに貼り付けて表示する
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                作ってもらったコードを貼り付け、ブラウザで確認します。
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}