import { useRouter } from 'next/dist/client/router'
import React from 'react'

const PostPage = () => {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <div>
      Post page
    </div>
  )
}
export default PostPage;
