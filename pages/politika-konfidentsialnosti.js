import Wrapper from 'components/Wrapper';
import Title from 'components/common/Title';
import Link from 'next/link';


const page = () => (
    <Wrapper title="Согласие на обработку персональных данных Пользователей | Компания «BeSmarter!». Тел. +7 (495) 772-40-90.">
        <div className="wrapper bg bg-c2 bg-img bg-img4">
            <section className="breadcrumbs">
                <div className="inner">
                    <Link href="/price">
                        <a>AAAAAAAAAA</a>
                    </Link>
                    <span> / </span>
                    <Link href="#">
                        <a>AAAAAAAAAAAAAAA</a>
                    </Link>
                </div>
            </section>

            <Title>ЭТО СТРАНИЦА-ЗАГЛУШКА</Title>

        </div>
    </Wrapper>
);

export default page
