import '../styles/globals.css';
import useGet from './api/useGet';
import GlobalContext from '../store/context/globalContext';

function MyApp({ Component, pageProps }) {
  const [doGet] = useGet();
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  )
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
