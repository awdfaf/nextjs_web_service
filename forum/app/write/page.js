

export default function Write(){
    return(
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목"/>
                <input name="content" placeholder="글내용"/>
                <button type="submit">버튼</button>
            </form>
            <hr/>
            {/* <form action="/api/list" method="GET">
                <button type="submit">DB조회</button>
            </form>
            <form action="/api/date" method="GET">
                <button type="submit">날짜조회</button>
            </form> */}
        </div>
    )
}