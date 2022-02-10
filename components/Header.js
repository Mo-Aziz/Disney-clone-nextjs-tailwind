import Image from 'next/image'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-[75px] items-center bg-[#040714] px-10 md:px-12">
      <Image src="/assets/images/logo.svg" width={80} height={80} />
    </div>
  )
}

export default Header
