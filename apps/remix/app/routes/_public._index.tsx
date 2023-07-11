import { usePublicChaptersQuery } from '@biztobiz/shared/util-sdk'

export default function PublicIndex() {
  const { data, loading, error } = usePublicChaptersQuery({ variables: { input: { take: 5 } } })

  return (
    <>
      <h1>Public Index</h1>
      <p>This is the public index page. It is accessible to anyone, whether they are logged in or not.</p>
      {data?.chapters?.map((chapter) => (
        <p key={chapter.id}>{chapter.name}</p>
      ))}
    </>
  )
}
