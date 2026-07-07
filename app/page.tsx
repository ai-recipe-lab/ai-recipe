export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          世界一優しいAIレシピ
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          AI初心者でも、AIを使って人生を少しずつ豊かに。
        </p>

        <div className="mt-10">
          <input
            type="text"
            placeholder="AIレシピを検索..."
            className="w-full max-w-xl rounded-xl border border-gray-300 px-5 py-4 shadow-sm"
          />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">🔥 人気レシピ</h2>
            <p className="mt-3 text-gray-600">
              AIで30分ホームページ作成
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">🎉 初めての方へ</h2>
            <p className="mt-3 text-gray-600">
              人生初のホームページを作ろう
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">📂 カテゴリー</h2>
            <p className="mt-3 text-gray-600">
              ホームページ・アプリ・画像・動画
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
