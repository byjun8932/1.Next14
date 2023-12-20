import {ReactNode} from 'react';

export default function AfterLoginLayout({children}: {children: ReactNode}){

    return(
        <div>
            =====애프터 로그인 레이아웃 시작=====
            {children}
            =====애프터 로그인 레이아웃 끝=====
        </div>
    )
}