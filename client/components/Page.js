/* eslint react/prop-types: 0 */
import Header from './Header';

export default function Page({ children }) {
  return (
    <>
      <Header />
      <h1>I am the page component</h1>
      {children}
    </>
  );
}
