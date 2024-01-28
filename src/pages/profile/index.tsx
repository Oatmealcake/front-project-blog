import Footer from 'components/Footer';
import Header from 'components/Haeder';
import PostList from 'components/PostList';
import Profile from 'components/Profile';

export default function ProfilePage() {
  return <>
    <Header />
    <Profile />
    <PostList hasNavigation={false} defaultTab="my" />
    <Footer />
  </>;
}