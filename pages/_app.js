// Importing the Navbar component from the components directory.
import Navbar from '../components/Navbar';

// Define the main application component, MyApp.
// This component wraps all the pages in Next.js, for global styles.
function MyApp({ Component, pageProps }) {
  return (
    <div>
     
      <Navbar />
  
      <Component {...pageProps} />

      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
}


export default MyApp;

//<Component {...pageProps} />
// Dynamically render the page component (based on the route) and pass any properties to it.
// For example, if you navigate to the /about route, the About page component will be rendered here.


