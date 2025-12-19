import { posts } from "../src/lib/posts";
import PostCard from "../src/components/postcard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho do Blog */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            DevBlog
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Tutoriais, dicas e código.
          </p>
        </header>

        {/* Grid de Posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </main>
  );
}
