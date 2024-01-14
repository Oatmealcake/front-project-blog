import Footer from 'components/Footer';
import Header from 'components/Haeder';
import PostList from 'components/PostList';

export default function PostPage() {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
}