import photo from './notFound.jpg';
export default function NotFoundPage() {
  return (
    <>
      <h2>Page not found</h2>
      <img src={photo} alt="not" width={480} />
    </>
  );
}
