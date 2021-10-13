import React from 'react';

import styled from '@emotion/styled';

const Header = styled.header({
  boxSizing: 'border-box',
});

const Body = styled.body({
  boxSizing: 'content-box',
});

export default function PamphletPage() {
  return (
    <div>
      <h2>새에덴 교회 청년부 주보</h2>
      <Header>
        <img src="../../images/헤더.png" alt="헤더" />
      </Header>
      <p>경배와 찬양</p>
      <p>회중 기도</p>
      <p>성경 봉독</p>
      <p>성가대</p>
      <p>생명의 말씀</p>
      <p>봉헌</p>
      <p>비전 선언문</p>
      <p>축도</p>
      <Body>
        <img src="../../images/나눔.png" alt="나눔" />
      </Body>
      <div>
        셀 나눔
        <button type="button">펼쳐 보기</button>
      </div>
      <div>
        기도하기
        <button type="button">펼쳐 보기</button>
      </div>
      <Body>
        <img src="../../images/광고.png" alt="광고" />
      </Body>
      <Body>
        <img src="../../images/동정.png" alt="동정" />
      </Body>
    </div>
  );
}
