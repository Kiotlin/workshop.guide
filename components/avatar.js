import Image from 'next/image'

const Avatar = ({ pic, name }) => {
  return (
    <div className="mr-2 basis-auto flex-shrink-0">
      <Image
        src={pic}
        alt={name || 'Avatar'}
        height={48}
        width={48}
        className="rounded-full object-cover object-center"
        loading="lazy"
        lazyBoundary="0px"
      />
    </div>
  )
}

export default Avatar
