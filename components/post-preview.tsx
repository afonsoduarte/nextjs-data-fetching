import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function PostPreview({
  title,
  slug,
  body,
  markdownBody
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      {body && <p className="text-lg leading-relaxed mb-4">{documentToReactComponents(body.json)}</p>}
      {markdownBody && <p className="text-lg leading-relaxed mb-4">{markdownBody}</p>}
    </div>
  )
}
