type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PageProps) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Nhatvip</p>
    </>
  );
}