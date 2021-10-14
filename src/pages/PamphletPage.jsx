import React from 'react';

import styled from '@emotion/styled';

const Header = styled.header({
  boxSizing: 'border-box',
});

export default function PamphletPage() {
  return (
    <>
      <h2>새에덴 교회 청년부 주보</h2>
      <Header>
        <img src="../../images/헤더.png" alt="헤더" />
      </Header>
      <div>
        <p>경배와 찬양</p>
      </div>
      <div>
        <p>회중 기도</p>
      </div>
      <div>
        <p>성경 봉독</p>
      </div>

      <div>
        <p>성가대</p>
      </div>

      <div>
        <p>생명의 말씀</p>
      </div>
      <div>
        <p>봉헌</p>
      </div>
      <div>
        <p>비전 선언문</p>
      </div>
      <div>
        <p>축도</p>
      </div>
      <img src="../../images/나눔.png" alt="나눔" />
      <div>
        셀 나눔
        <button type="button">펼쳐 보기</button>
      </div>
      <div>
        기도하기
        <button type="button">펼쳐 보기</button>
      </div>
      <img src="../../images/광고.png" alt="광고" />
      <img src="../../images/동정.png" alt="동정" />
    </>
  );
}
