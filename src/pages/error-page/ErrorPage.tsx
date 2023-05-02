import MainLayout from "../../components/layout/MainLayout";

export default function ErrorPage() {


  return (
    <MainLayout>
      <div id="error-page" className="text-center ">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </MainLayout>
  );
}