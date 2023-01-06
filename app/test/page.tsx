async function fetchPosts() {
  const allPosts = await fetch('http://localhost:3000/api/budgeting', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await allPosts.json();
  return data;
}

export default async function TestPage() {
  const posts = await fetchPosts();

  // const buttonClick = async () => {
  //   const doPost = async () => {
  //     let res = await fetch("http://localhost:3000/api/budgeting", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title: "test title",
  //         content: "test content",
  //       }),
  //     });
  //     res = await res.json();
  //     console.log(res);
  //     return res;
  //   };
  //   doPost();
  // };

  return (
    <div>
      {/* <TextButton onClick={buttonClick}>DoPost</TextButton> */}
      {posts.status == 200 && <p>{posts.status}</p>}
      {posts.status == 200 && (
        <p>
          STATUS IS {posts.status} AND DATA TITLE IS {posts.data[0].title}
        </p>
      )}
      <p className='text-color-primary-500'>Test page</p>
    </div>
  );
}
