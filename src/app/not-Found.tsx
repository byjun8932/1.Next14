import Link from 'next/link'

const NotFound = () => {
    return(
        <div>
            <div>이 페이지는 존재하지 않습니다. 다른 페이지를 이용해주세요</div>
            <Link href='/search'></Link>
        </div>
    )
}

export default NotFound;