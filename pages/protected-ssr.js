import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function ProtectedPage({user}) {


  return (
    <div>
      Hello, {user.name}
    </div>
  )
}

// By using withPageAuthRequired user automatically gets passed as props
export const getServerSideProps = withPageAuthRequired();