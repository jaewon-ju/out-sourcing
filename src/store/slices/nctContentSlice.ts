// src/slices/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export type NCTFashion = {
  title: string[];
  image: string[][];
  subTitle: string[];
  subDescription: string[];
  timeStamp: string[];
  description: string[];
};

export type NCTProps = {
  image: {
    src: string;
    detailImage: string;
    detailTitle: string;
    detailDescription: string;
  }[];
};

export type NCTSetSpace = {
  title: string[];
  image: string[];
  hoverImage: string[];
  description: string[];
};

export type NCTTypography = {
  image: string[];
};

export type NCTDirection = {
  title: string[];
  image: string[][];
  description: string[];
};

export type NCTRelated = {
  image: string[];
};

interface NCTContentState {
  fashion: NCTFashion;
  props: NCTProps;
  setSpace: NCTSetSpace;
  direction: NCTDirection;
  related: NCTRelated;
  typography: NCTTypography;
  youtube: {
    url: string;
    title: string;
    subTitle: string;
    viewUrl: string;
  };
  tags: string[];
}

const initialState: NCTContentState = {
  fashion: {
    title: [
      "[NCT WISH | Steady ] Look #1 - [School Badge]",
      "[NCT WISH | Steady ] Look #2 - [Cros]",
    ],
    image: [
      ["/fashion/nct/1_1.png", "/fashion/nct/1_2.png"],
      ["/fashion/nct/2_1.png", "/fashion/nct/2_2.png"],
    ],
    subTitle: ["영미권 학교 앰뷸럼", "크록스 신발"],
    subDescription: [
      "Y2K school uniforms, 80s anime aesthetics",
      "2000s Casual, ComfyUglyCool",
    ],
    timeStamp: ["(02:03 - 02:08)", "(02:09 - 02:10)"],
    description: [
      "동그란 테두리에 학교 이름을 새긴 디자인은 전통적인 영미권 학교 휘장 스타일이다.\n80년대 미국 고등학교 혹은 구식 사립학교의 엠블럼을 보는 듯한 인상, 90년대 일본 만화에 종종 등장하는 가상의 학교 엠블럼 디자인과도 유사하다.",
      "2002년 출시된 크록스는 독특한 실루엣과 가벼운 착화감으로 주목받았다. 현대엔 자신만의 취향을 담은 지비츠(Gibbitz) 파츠를 더해 각자의 스타일을 완성할 수 있는 커스터마이징 신발로 진화했다. 레트로, Y2K, 놈코어 등 다양한 스타일과도 어우러지는 크록스는, 실용성과 재미, 그리고 과거의 향수를 모두 담고 있다.",
    ],
  },
  props: {
    image: [
      {
        src: "/prop/nct/1.png",
        detailImage: "/prop/nct/detail/1.png",
        detailTitle: "서적 디자인 유형",
        detailDescription:
          "1870년대에서 1930년대 스피리추얼리즘(유령, 교령술 등)에 대한 대중적 관심이 높아지면서, 관련 서적들이 폭발적으로 출간되었다. 당시 서적의 표지양식을 차용한 디자인.",
      },
      {
        src: "/prop/nct/2.png",
        detailImage: "/prop/nct/detail/2.png",
        detailTitle: "화살모양 펜",
        detailDescription:
          "20세기 중후반 만화나 카드에서 묘사된 큐피드의 화살과 현대 연필 결합형태.",
      },
      {
        src: "/prop/nct/3.png",
        detailImage: "/prop/nct/detail/3.png",
        detailTitle: "별 모양 반창고",
        detailDescription:
          "1990~2000년대 학창시절 유행했던 캐릭터 반창고나 스티커형 반창고.",
      },
      {
        src: "/prop/nct/4.png",
        detailImage: "/prop/nct/detail/4.png",
        detailTitle: "iPhone 13, 14 model",
        detailDescription:
          "2021년 이후 출시된 아이폰의 13 혹은 14모델의 외관.\n현대의 휴대전화 기종을 사용하고있다.",
      },
    ],
  },
  setSpace: {
    title: [
      "목조 기반의 학교 건축양식",
      "목재 책상, 의자, 창, 커튼",
      "옥상(일본 90년대 학원물 감성)",
      "옛 시골 일본학교 건축",
      "유럽 혼합양식 건축물",
    ],
    image: [
      "/set-space/nct/1.png",
      "/set-space/nct/2.png",
      "/set-space/nct/3.png",
      "/set-space/nct/4.png",
      "/set-space/nct/5.png",
    ],
    hoverImage: [
      "/set-space/nct/1_hover.png",
      "/set-space/nct/2_hover.png",
      "/set-space/nct/3_hover.png",
      "/set-space/nct/4_hover.png",
      "/set-space/nct/5_hover.png",
    ],
    description: [
      "목조 벽체와 슬라이딩 도어, 단열이 덜 된 구조.\n 백열전구 1개 조명.\n 일본 농촌 혹은 시골 지역 학교에서 흔히 볼 수 있는 형태.",
      "2000년대 이전 학교의 전형적인 책걸상.\n현대 플라스틱 소재가 아닌 시간의 흔적을 느낄 수 있는 재질.\n창틀은 전통적인 나무 프레임, 사각 격자형 구조\n빛을 산란시키는 얇은 쉬폰 소재의 커튼\n채도가 낮고 부드러운 자연광 기반 톤으로 오래된 사진이나 필름처럼 보정했다.",
      "옥상의 녹슨 난간, 빨래가 걸린 줄, 그리고 멀리 보이는 벽돌 건물 등,\n일본 학교나 기숙사의 옥상을 떠올리게 한다. 이국적이면서도 향수를 일으키는 무드.",
      "한국적인 교복스타일로 춤을 추는 멤버들 뒤로 옛날 시골 일본학교의\n 건축양식과 흡사한 건물이 등장한다.",
      "Neo-Gothic과 Neo-Renaissance (19세기 유럽 학원풍 건축물)양식 차용.\n붉은 벽돌과 흰색 몰딩의 조합은 전통적인 유럽 학원 건물의 외관. 양쪽 타워에 뾰족한 첨탑이 올라간 형태는 고딕 건축의 상징적 장식이다.\n중앙부의 반원형 전망구조는 르네상스풍의 '돔 양식'에서 파생되었고, 반복적으로 박공(삼각 지붕)이 올라간 형태는 19세기식 기숙학교 이미지와 유사하다.",
    ],
  },
  direction: {
    title: [
      "VHS 시절 영화 자막",
      "시트 유령 연출",
      "아날로그 필름카메라",
      "청량한 자연 색감",
    ],
    image: [
      ["/direction/nct/1.png"],
      [
        "/direction/nct/2.png",
        "/direction/nct/2_1.png",
        "/direction/nct/2_2.png",
      ],
      ["/direction/nct/3.png"],
      [
        "/direction/nct/4.png",
        "/direction/nct/4_1.png",
        "/direction/nct/4_2.png",
      ],
    ],
    description: [
      "일본어와 한국어를 혼용해서 대화하는 멤버들. VHS 시절 영화 자막 느낌을 준다.\nMV 도입부에는 교실의 선풍기 소리, 창밖에서 들리는 여름 벌레 소리 등이 들리는데, 이는 90년대 학창시절을 배경으로 한 영화들이 배경음으로 삽입하곤 하던 사운드들이다.\n첫사랑(꿈)을 그린 스토리, 청춘 영화같은 연출 몽환적이고 시네마틱한 분위기",
      "20세기 중반 미국 할로윈 전통이나 옛 코미디 만화에서 흔히 볼 수 있는 모습. 할로윈의 동심혹은 올드 팬텀 영화에서 등장하는 식탁보, 시트를 뒤집어 쓴 유령의 형상이다.",
      "과도하게 선명하거나 쨍한 색상을 배제, 은은하게 바랜 듯한 파스텔 톤과 따뜻한 색감을사용했다. 교실 씬에서는 나무 책상과 창틀의 갈색, 커튼을 통과한 확산된 자연광이 어우러져 필름 사진처럼 연출했다.",
      "1980년대 후반~1990년대 초반의 일본 드라마나 청춘 만화에서 묘사되던 여름 풍경 소프트 포커스와 필름 그래인이 더해진 듯한 영상 질감. 실제 과거의 한 장면을 엿보는 듯한 색감 연출, 몽환적 분위기를 고조시키며 현실과 환상의 경계를 흐리게 만들고 꿈결 같은 향수를 전달한다.",
    ],
  },
  typography: {
    image: ["/typography/nct/1.png", "/typography/nct/2.png"],
  },
  related: {
    image: ["/images/NewJeans2.png", "/images/RIIZE.png", "/images/TWS.png"],
  },
  youtube: {
    viewUrl: "https://www.youtube.com/watch?v=IKlkZZv76Ho",
    url: "https://www.youtube.com/embed/IKlkZZv76Ho?si=ojqbpcd-mWiDTZ03",
    title: "NCT WISH 엔시티 위시 'Steady' MV",
    subTitle: "그리운 과거의 학창시절, 순정만화 같은 사랑, 유년기의 여름날",
  },
  tags: ["Japan", "2000s", "School", "First Love"],
};

export const nctContentSlice = createSlice({
  name: "nctContent",
  initialState,
  reducers: {},
});

export default nctContentSlice.reducer;
