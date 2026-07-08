export default function PostPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-gray-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <a href="/" className="text-sm text-gray-500 hover:text-gray-900">
          ← トップへ戻る
        </a>

        <h1 className="mt-10 text-4xl font-bold">
          AIレシピを投稿する
        </h1>

        <p className="mt-4 text-gray-600">
          あなたが試してうまくいったAI活用法を、初心者にも分かる形で共有しましょう。
        </p>

        <form className="mt-10 space-y-6 rounded-3xl border border-gray-200 bg-white p-8">
          <div>
            <label className="text-sm font-bold">レシピ名</label>
            <input
              type="text"
              placeholder="例：AIで初めてホームページを作る"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-bold">使うAI・ツール</label>
            <input
              type="text"
              placeholder="例：ChatGPT、Gemini、Claude Code"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-bold">手順</label>
            <textarea
              placeholder="初心者にも分かるように、手順を書いてください"
              className="mt-2 min-h-40 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <button className="w-full rounded-xl bg-gray-900 px-6 py-4 font-bold text-white">
            投稿する
          </button>
        </form>
      </div>
    </main>
  );
}