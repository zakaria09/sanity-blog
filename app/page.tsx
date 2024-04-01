import {client} from '@/sanity/lib/client';
import groq from 'groq';
import Image from 'next/image';
import {PostList} from './types/Post';
import PostCard from './components/PostCard';
import {urlForImage} from '@/sanity/lib/image';
import PaginationSection from './components/PaginationSection';

const getPosts = async (lastPageNum: number = 0) => {
  const query = groq`*[_type == 'blog'] | order(_createdAt desc) [${lastPageNum}...${
    lastPageNum + 2
  }] {
    _id,
      title,
      smallDescription,
      _createdAt,
      "currentSlug": slug.current,
      titleImage
  }`;
  return client.fetch(query, {lastId: lastPageNum});
};

const getTotalPosts = async () => {
  const query = groq`count(*[_type == 'blog'])`;
  return client.fetch(query);
};

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const pageNum = Number(searchParams?.page ?? 0);
  const posts: PostList[] = await getPosts(pageNum);
  const postsNum = await getTotalPosts();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='max-w-xl'>
        {posts.map((post) => (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.smallDescription}
            image={urlForImage(post.titleImage)}
            slug={post.currentSlug}
          />
        ))}
        <PaginationSection maxPage={postsNum} />
      </div>
    </main>
  );
}
