import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Emmanuel' },
      _id: 1,
      description: "This is a description...",
      image:
        "https://imgs.search.brave.com/yWosdsGCSh0RC3xhWQ5LI99U-Ss6-t4ZcZMpanUq3hE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kaWdp/dGFsYXNzZXRzLnRl/c2xhLmNvbS90ZXNs/YS1jb250ZW50cy9p/bWFnZS91cGxvYWQv/Zl9hdXRvLHFfYXV0/by9XZS1Sb2JvdC1D/YXJvdXNlbC1TbGlk/ZS0xLVJvYm90YXhp/LURlc2t0b3AtdjIu/cG5n",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <li>No posts available</li> // Optional fallback if there are no posts
          )}
        </ul>
      </section>
    </>
  );
}
