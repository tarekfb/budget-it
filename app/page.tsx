import BudgetForm from '@/components/other/BudgetForm';

export default async function HomePage() {
  return (
    <>
      <h1 className='mb-4'>Budget It</h1>
      <h2 className='mb-4'>Calculate your budget</h2>
      <BudgetForm />
    </>
  );
}

// import TextButton from "@/components/buttons/TextButton";

// const doPost = async () => {
//   let res = await fetch("http://localhost:3000/api/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "new test title",
//       content: "new test content",
//     }),
//   });
//   res = await res.json();
//   console.log(res);
//   return res;
// };

// <TextButton onClick={doPost}>DoPost</TextButton>
