import Link from "next/link";
import Animation from "./Animation";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium title-font sm:text-4xl">
          안녕하세요!
          <br className="hidden lg:inline-block" />
          윤호준입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          쇠마팍하는 미리졀아졔 선진딤을 채됴이밉오의 아로아아, 자농피사로
          야들다. 엉느기 요짐 낙올호다 애귄익은 노뜻부스에 가더자학은 라이인다.
          미럿을 애여 스댤닌져 즈헤 즈아간탕고 모아후가 가가시 가렷을까 르넌에
          어임으라 쥬따이. 라톼사고 조눔디니의 허븟에 으마로써 쟁긔의 드추놀노는
          은로를 애휩게으는데 잉뵈가 둔앙이 항버느로. 밍힝늑저아걍는 이닌가긴
          헌쟌합는다 쟅옹은 문산도록 길비턴힌아려고 다므왈후치게 사쟀지선다.
        </p>
        <div className="flex justify-center">
          <Link className="btn-project" href={"/projects"}>
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div>
    </>
  );
}

export default Hero;
