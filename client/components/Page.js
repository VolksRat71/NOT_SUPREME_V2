/* eslint react/prop-types: 0 */

export default function Page({ children }) {
  return (
    <>
      <h1>I am the page component</h1>
      {children}
    </>
  );
}
