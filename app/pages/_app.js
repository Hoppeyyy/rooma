import '../styles/globals.css';
import useGet from './api/useGet';

function MyApp({ Component, pageProps }) {
  const [doGet] = useGet();
  return <Component {...pageProps} />
}


export async function getServerSideProps(context) {
  const req = context.req; //access to request obj, useful for authentication. 
  const res = context.res;

  // fetch data from api
  // code here only run on server


  return {
    props: {
        meetups: DUMMY_MEETUPS,
    }
  }; 
}

export default MyApp
