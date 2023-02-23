import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function DashboardPage({user}) {


  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
      
      <p>Hello, {user.name}</p>
      <p>Here is your protected SSR dashboard</p>
      <p>Accessing this URL while not logged in will result in a redirect to the login screen</p>
      
    </div>
  )
}

// By using withPageAuthRequired user automatically gets passed as props
export const getServerSideProps = withPageAuthRequired();


// You can also add additional props by passing in a getServerSideProps function like so:

// export const getServerSideProps = withPageAuthRequired({
//    async getServerSideProps (ctx){
//     return {
//       props: {
//         additional: "this will also be passed through as props in addition to the user object"
//       }
//     }
//   }
// });